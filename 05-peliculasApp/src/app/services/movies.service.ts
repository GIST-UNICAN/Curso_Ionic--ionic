import { RespuestaMDB, fechas, PeliculaDetalle, RespuestaActores, Genre } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DefaultValueAccessor } from '@angular/forms';


const URL= environment.url;
const apiKey= environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService{

  private popularesPage: number =0;
  generos: Genre[]=[]

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string){
    query = URL+query;
    query += `&api_key=${apiKey}&language=es&include_image_language=es`
    console.log('query',query)
    return this.http.get<T>(query)
  }


  getFechas<fechas> () {
    const hoy = new Date()
    const ultimoDia= new Date(hoy.getFullYear(), hoy.getMonth()+1, 0).getDate();
    let mes= hoy.getMonth()+1;
    let mesString;

    if(mes<10){
      mesString='0'+mes;
    }else{
      mesString=mes;
    }

    const inicio= `${hoy.getFullYear()}-${mesString}-01`
    const fin= `${hoy.getFullYear()}-${mesString}-${ultimoDia}`

    //let devuelve: fechas;
    let devuelve = new fechas() //{inicio: inicio, fin: fin};
    devuelve.inicio=inicio;
    devuelve.fin=fin;
    return devuelve

  }

  getPopulares(){

    this.popularesPage ++;

    const fechas: fechas =this.getFechas()

    const query= `/discover/movie?sort_by=popularyty.desc&primary_release_date.gte=${fechas.inicio}&primary_release_date.lte=${fechas.fin}&page=${this.popularesPage}`
    return this.ejecutarQuery<RespuestaMDB>(query) 

  }



  getFeature(){

    const fechas: fechas =this.getFechas()

    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${fechas.inicio}&primary_release_date.lte=${fechas.fin}`) 
  }


  getDetalles(filmId: string){
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${filmId}?a=1`)
  }

  getActores(filmId: string){
    return this.ejecutarQuery<RespuestaActores>(`/movie/${filmId}/credits?a=1`)
  }

  buscarPelicula(pelicula:string){
    return this.ejecutarQuery<RespuestaMDB>(`/search/movie?query=${pelicula}`)
  }

  obtenerGeneros(): Promise<Genre[]>{
      return new Promise( resolve=>{

          return this.ejecutarQuery(`/genre/movie/list?a=1`).subscribe(respuesta=>{
            this.generos=respuesta['genres']
            resolve(this.generos);
          })
      });

  }
}
