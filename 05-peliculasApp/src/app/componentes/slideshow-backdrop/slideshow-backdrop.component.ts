import { Pelicula } from 'src/app/interfaces/interfaces';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  slideOpts2={
    slidesPerView: 1.2,
    freeMode: true
  }

  @Input() peliculasRecientes: Pelicula[]= [];

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}

  async onClick(pelicula: string){

    const modal=await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps:{
        pelicula
      }
    })
    modal.present();


  }

}
