import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private oneSignal: OneSignal) { }

  configuracionInicial(){
    this.oneSignal.startInit('186ece5c-c39f-4b07-a484-b668a1e5d9d2', '831361457176');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
    // do something when notification is received
    console.log('Notificacion', noti)
    });

    this.oneSignal.handleNotificationOpened().subscribe((noti) => {
      // do something when a notification is opened
      console.log('Notificacion abierta', noti)
    });

    this.oneSignal.endInit();
  }

}
