import { RespuestaTopHeadlines, Articulo } from './../../interfaces/interfaces';
import { DescargadorService } from './../../servicios/descargador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  noticias_file: Articulo[]=[];

  constructor(private noticias: DescargadorService) {}

  ngOnInit(){
    this.cargarNoticia()
  }
  
  cargarMas(event){
    this.cargarNoticia(event)
  }

  cargarNoticia(event?){
    this.noticias.getTopNoticias().subscribe(resp=>{
      if (resp.articles.length===0){
        event.target.disable=true;
        event.target.complete()
        return;
      }
      this.noticias_file.push(...resp.articles);
      console.log('datos brutos',resp);
      if (event){
        event.target.complete();
      }
      
    });
   
  }

}
