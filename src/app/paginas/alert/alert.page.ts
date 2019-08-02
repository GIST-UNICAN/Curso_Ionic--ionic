import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  titulo: string;
  constructor(public alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Prueba Alerta',
      message: 'Mensaje doble.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlertInput() {
    const alert = await this.alertController.create({
      header: 'Prueba Alerta Input',
      inputs: [
        {
          name: 'titulo_nuevo',
          type: 'text',
          placeholder: 'Nombre'
        }],
      message: 'Mensaje doble.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: ');
          }
        }, {
          text: 'Okay',
          handler: (datos) => {
            console.log('Confirm Okay, ', datos);
            this.titulo = datos.titulo_nuevo;
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
