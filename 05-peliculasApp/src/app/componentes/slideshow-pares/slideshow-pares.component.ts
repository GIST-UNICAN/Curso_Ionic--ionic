import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {
  slideOpts2={
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween:-20
  }

  @Input() peliculas: Pelicula[]= [];
  @Output() cargarMas= new EventEmitter();

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onClick(){
    this.cargarMas.emit();
  }

  async onClickDetalle(pelicula: string){

    const modal=await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps:{
        pelicula
      }
    })
    modal.present();


  }

}
