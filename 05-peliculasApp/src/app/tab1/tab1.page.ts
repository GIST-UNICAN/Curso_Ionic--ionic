import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { RespuestaMDB, Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  peliculasRecientes: Pelicula[]=[];

  slideOpts={
    slidesPerView: 1.2,
    freeMode: true
  }

  constructor(private descargaPelis: MoviesService ) {}

  ngOnInit(){
    this.descargaPelis.getFeature().subscribe(resp=>{
      console.log(resp)
      this.peliculasRecientes=resp.results;
    });
  }

}
