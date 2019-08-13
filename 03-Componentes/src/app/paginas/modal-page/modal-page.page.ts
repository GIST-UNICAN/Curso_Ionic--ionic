import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cerrarConArgumentos(){
    this.modalCtrl.dismiss(
      {'argumento':"cerrado"}
    )
  }
  cerrarSinArgumentos(){
    this.modalCtrl.dismiss()
  }

}
