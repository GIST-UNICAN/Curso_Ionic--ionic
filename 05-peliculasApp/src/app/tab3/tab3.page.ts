import { MoviesService } from './../services/movies.service';
import { LocaldataService } from './../services/localdata.service';
import { PeliculaDetalle, Genre } from './../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  

  peliculas: PeliculaDetalle[]=[]
  generos: Genre[]=[]
  favoritoGenero: any[]=[]

  constructor(private localStorage: LocaldataService,
              private movieService: MoviesService) {}


  async ionViewWillEnter(){
    this.peliculas = await this.localStorage.cargarFavoritos()
    this.generos = await this.movieService.obtenerGeneros()
    this.peliculasGenero(this.generos, this.peliculas)
  }
  

  peliculasGenero( generos:Genre[], peliculas: PeliculaDetalle[]){
    this.favoritoGenero=[];
    generos.forEach(genero => {
      this.favoritoGenero.push(
        {
          genero: genero.name,
          pelis: peliculas.filter(peli=>{
            return peli.genres.find(genre => genre.id===genero.id);
          })
        }
      )
    });
    console.log('pelis genero',this.favoritoGenero)
  }

}
