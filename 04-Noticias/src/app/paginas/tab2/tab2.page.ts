import { Articulo } from './../../interfaces/interfaces';
import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DescargadorService } from 'src/app/servicios/descargador.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit{

  @ViewChild(IonSegment, {static:true}) segment: IonSegment;

  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  noticias: Articulo[]=[]
  categoria_seleccionada:string =""

  constructor(private descarga: DescargadorService) {}


  cargarNoticias(categoria: string, event?){
    
    this.descarga.getCategoryNews(categoria).subscribe(resp=>{
      
      if(resp.articles.length===0){
        event.target.disable=true;
        event.target.complete()
        return;
      }
      console.log("categoria", resp)
      this.noticias.push(...resp.articles)
      if(event){
        event.target.complete()
      }
    });
  }

  ngOnInit(){
    this.segment.value=this.categorias[0];
    this.cargarNoticias(this.categorias[0])
  }

  segmentChanged(event){
    this.noticias=[];
    this.cargarNoticias(event.detail.value)
  }

  loadMasNoticias(event){
    this.cargarNoticias(this.segment.value, event);

  }

}
