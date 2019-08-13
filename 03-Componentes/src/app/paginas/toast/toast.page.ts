import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  texto: string="";

  constructor(private toastCtr: ToastController) { }

  ngOnInit() {
  }


  async showToast(){
    const toast= await this.toastCtr.create(
      {
        message: this.texto,
        duration: 2000
      }
    );
    toast.present()

  }

}
