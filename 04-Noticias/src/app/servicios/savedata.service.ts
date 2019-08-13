import { Articulo } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class SavedataService {

  noticias_favoritas: Articulo[]=[];

  constructor(private storage: Storage) { 
    this.cargarFavoritos();
  }


  guardaNoticia(noticia: Articulo){
    const existe= this.noticias_favoritas.find(noti => noti.title===noticia.title)
    if (!existe){
      this.noticias_favoritas.unshift(noticia);
      this.storage.set('favs',this.noticias_favoritas)
    }
  }

  async cargarFavoritos(){
    const favoritos = await this.storage.get('favs')
    if (favoritos){
      this.noticias_favoritas= favoritos;
    }
  }
}
