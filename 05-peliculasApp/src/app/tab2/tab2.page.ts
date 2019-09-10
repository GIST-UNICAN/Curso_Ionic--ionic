import { ModalController } from '@ionic/angular';
import { Pelicula } from './../interfaces/interfaces';
import { MoviesService } from './../services/movies.service';
import { Component } from '@angular/core';
import { DetalleComponent } from '../componentes/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar: string="";
  ideas: string[]=['Spiderman','Avatar','Sonrisas y lágrimas']
  resultadoPeliculas: Pelicula[]=[];
  buscando=false;

  constructor(private moviesService: MoviesService,
              private modalCtrl: ModalController) {}

  buscar(event){
    this.buscando=true;
    const valor: string = event.detail.value;
    if (valor.length===0){
      this.buscando=false;
      this.resultadoPeliculas=[];
      return;
    }
    this.moviesService.buscarPelicula(valor).subscribe(resp=>{
      console.log(resp)
      this.resultadoPeliculas=resp['results']
      this.buscando=false
    })
  }

  async mostrarDetalle(id: string){
    console.log(id)
    const modal = await this.modalCtrl.create(
      {
        component: DetalleComponent,
        componentProps:{
          pelicula:id
        }
      }
    )
    modal.present();
  }

}
