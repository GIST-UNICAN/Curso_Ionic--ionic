import { ModalController } from '@ionic/angular';
import { Cast, PeliculaDetalle } from './../../interfaces/interfaces';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() pelicula: string;

  actores: Cast[]=[]
  detallesPelicula: PeliculaDetalle={};
  oculto =150;
  slideOptActors={
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween:-5

  }

  constructor(private movieService: MoviesService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log("ID", this.pelicula)
    this.movieService.getDetalles(this.pelicula).subscribe(resp=>{
      this.detallesPelicula=resp;
      //console.log(resp)
    })
    console.log("ID", this.pelicula)
    this.movieService.getActores(this.pelicula).subscribe(resp=>{
      this.actores=resp.cast;
      console.log(resp)
    })
  }

  regresar(){
      this.modalCtrl.dismiss()
  }

  favorito(){

  }

}
