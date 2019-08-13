import { DownloadService } from './../../services/download.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {

  albumes : any[]=[];
  texto_buscar:string="";

  constructor(private descargador:DownloadService) { }

  ngOnInit() {
    this.descargador.getAlbum().subscribe( albumes=>
      {
        console.log(albumes);
        this.albumes=albumes;
      }
    );
  }

  buscar(event){
    this.texto_buscar=event.detail.value;

    console.log(event)
  }

}
