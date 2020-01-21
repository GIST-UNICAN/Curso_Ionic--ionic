import { PushService } from './../services/push.service';
import { Component, OnInit, ApplicationRef } from '@angular/core';
import { OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  

  mensajes: OSNotificationPayload[]=[]

  constructor( public  push: PushService,
               private appREf: ApplicationRef) {}


  ngOnInit() {
    this.push.pushListener.subscribe(noti=>{
      this.mensajes.unshift(noti);
      this.appREf.tick()
    })
  }

  async ionViewWillEnter(){

    console.log('Will enter loading mensajes')
   this.mensajes= await this.push.getMensajes()
  }

  async borrarMensaje(){
    await this.push.borraMensajes()
    this.mensajes=[];
  }


}
