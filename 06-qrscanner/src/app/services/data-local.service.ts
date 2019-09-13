import { Injectable } from '@angular/core';
import { Registro } from '../modelos/registro.model';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { File } from '@ionic-native/file/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';





@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  escaneos: Registro[]=[]

  constructor(private storage:Storage,
              private navCtrl: NavController,
              private iab: InAppBrowser,
              private fileCtrl: File,
              private emailSender: EmailComposer) { }


  async guardarRegistro(format: string, texto: string){

    await this.obtenerRegistros()

    const nuevoRegistro= new Registro(format, texto)
    this.escaneos.unshift(nuevoRegistro);
    this.abrirRegistro(nuevoRegistro)
    this.storage.set('registros', this.escaneos)
    this.navCtrl.navigateForward('/tabs/tab2');
  }

  async obtenerRegistros(){
    this.escaneos = (await this.storage.get('registros')) || []
  }

  abrirRegistro(registro:Registro){
    this.navCtrl.navigateForward('/tabs/tab2');

    switch (registro.type){
      case 'http':
        //navegador web
        this.iab.create(registro.text,'_system');
      break;

      case 'geo':
        //mapitaS
        this.navCtrl.navigateForward(`/tabs/tab2/mapa/${registro.text}`)

      break;
    }
  }
  enviarCorreo(){
    const titulos:string= 'TIPO, FORMATO, CREADO EN, TEXTO\n';
    const arrTemp=[];
    arrTemp.push(titulos);
    this.escaneos.forEach(registro=>{
      const fila=`${registro.type},
                  ${registro.format},
                  ${registro.created},
                  ${registro.text.replace(',',';')}\n`;
      arrTemp.push(fila)
    })
    this.crearArchivo(arrTemp.join(''))
  }
  crearArchivo(text:string){
    this.fileCtrl.checkFile(this.fileCtrl.dataDirectory,'registros.csv').then(existe=>{
      console.log ('existe',existe)
      return this.escribirArchivo(text)
    }).catch(err=>{
      this.fileCtrl.createFile(this.fileCtrl.dataDirectory, 'registros.csv', false).then(
        creado=>{
          this.escribirArchivo(text)
        }
      ).catch(err2=>{
        console.log('no se puede hacer el archivo',err2)
      })
    })

    
  }
  async escribirArchivo(text:string){
    await this.fileCtrl.writeExistingFile(this.fileCtrl.dataDirectory,'registros.csv',text)
    console.log('creado')
    const archivo= this.fileCtrl.dataDirectory+'registros.csv'
    const email = {
      to: 'andresrgutierrez@gmail.com',
      //cc: 'erika@mustermann.de',
      //bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [
        archivo,
      ],
      subject: 'Scans file',
      body: `Enviando escaneos SCANApp ${archivo}`,
      isHtml: true
    }
    
    // Send a text message using default options
    this.emailSender.open(email);
  }
}
