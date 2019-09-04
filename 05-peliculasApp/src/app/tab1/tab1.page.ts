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

  populares:Pelicula[]=[]

  

  constructor(private descargaPelis: MoviesService ) {}

  ngOnInit(){
    this.descargaPelis.getFeature().subscribe(resp=>{
      console.log(resp)
      this.peliculasRecientes=resp.results;
    });
    this.descargaPelis.getPopulares().subscribe(resp=>{
      console.log ('populares', resp)
      this.populares=resp.results;//.splice(1,resp.results.length);
    })
  }

}
