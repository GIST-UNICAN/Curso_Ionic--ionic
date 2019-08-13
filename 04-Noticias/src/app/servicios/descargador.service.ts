import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';


const apiKey =environment.apiKey;
const apiURL = environment.apiURL;

const headers = new HttpHeaders({
  'X-Api-Key': apiKey

});




@Injectable({
  providedIn: 'root'
})
export class DescargadorService {

  headlinesPage=0;
  categoriaActual="";
  categoriaPage=0;

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string){

    const query2 = apiURL + query;
    console.log('peticion: ', query2)
    return this.http.get<T>(query2, {headers})
  }

  getTopNoticias(){
    this.headlinesPage++;
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&page=${this.headlinesPage}`)
    //return this.http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/top-headlines?country=us&apiKey=7634cf4b48f340b79252169a03ec238e')
  }

  getCategoryNews(categoria: string){
    if (categoria===this.categoriaActual){
      this.categoriaPage++;
    }else{
      this.categoriaPage=1;
      this.categoriaActual=categoria;
    }
    
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&category=${categoria}&page=${this.categoriaPage}`)
    //return this.http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7634cf4b48f340b79252169a03ec238e')
  }
}
