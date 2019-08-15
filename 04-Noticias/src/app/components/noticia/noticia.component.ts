import { SavedataService } from './../../servicios/savedata.service';
import { Articulo } from './../../interfaces/interfaces';
import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActionSheetController, Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Articulo;
  @Input() indice: number;

  constructor(private openUrl: InAppBrowser, private wv: WebView,
              private actionSheetCtrl: ActionSheetController,
              private social: SocialSharing,
              private manejadorFavoritos: SavedataService,
              private plataforma: Platform) { }

  ngOnInit() {}

  abrirNoticia(){
    console.log('intentendo abrir:',this.noticia.url)
    //const img = this.wv.convertFileSrc(this.noticia.url)
    const browser= this.openUrl.create(this.noticia.url,'_system');
  }
  async lanzarMenu(){
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [{
       
        text: 'Compartir',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          this.compartirNoticia();
          
        }
      }, {
        text: 'Favorito',
        icon: 'heart',
        cssClass: 'action-dark',
        handler: () => {
          this.manejadorFavoritos.guardaNoticia(this.noticia);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        cssClass: 'action-dark',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


  compartirNoticia(){
    if (this.plataforma.is('cordova')){
      this.social.share(
        this.noticia.title,
        this.noticia.source.name,
        '',
        this.noticia.url
      );
    }else{
      if (navigator['share']) {
        navigator['share']({
            title: this.noticia.title,
            text: this.noticia.description,
            url: this.noticia.url,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      }

    }
    
  }

}
