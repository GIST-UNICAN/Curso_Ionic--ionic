import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class PushService {

  public mensajes: OSNotificationPayload[]=[];

  pushListener = new EventEmitter<OSNotificationPayload>();
    
  userID:string="";
  constructor(private oneSignal: OneSignal,
              private storage: Storage) {
      
         this.cargarMensajes()
               }

  configuracionInicial(){
    this.oneSignal.startInit('186ece5c-c39f-4b07-a484-b668a1e5d9d2', '831361457176');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
    // do something when notification is received
    console.log('Notificacion', noti)
    this.notificacionRecibida(noti)

    });

    this.oneSignal.handleNotificationOpened().subscribe(async (noti) => {
      // do something when a notification is opened
      console.log('Notificacion abierta', noti)
      await this.notificacionRecibida(noti.notification)
    });
    //id
    this.oneSignal.getIds().then(info=>{
      this.userID=info.userId
      console.log(this.userID)
    })
    this.oneSignal.endInit();
  }

  async notificacionRecibida(noti: OSNotification){

    await this.cargarMensajes();

    const payload= noti.payload;
    const existePush= this.mensajes.find(mensaje=>mensaje.notificationID===payload.notificationID)

    if (existePush){
      return;
    }

    this.mensajes.unshift(payload)
    this.pushListener.emit(payload)
    this.guardarMensajes()

  }

  guardarMensajes(){
    this.storage.set('mensajes', this.mensajes);
  }
  async cargarMensajes(){
    this.mensajes= await this.storage.get('mensajes') || []
    return this.mensajes;
  }

  async getMensajes(){
    await this.cargarMensajes()
    return [...this.mensajes];
  }

  async borraMensajes(){
    await this.storage.clear();
    this.mensajes=[]
    this.guardarMensajes();
  }

}
