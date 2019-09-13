import { Component, OnInit } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';
import { Registro } from 'src/app/modelos/registro.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  async ngOnInit() {
    await this.localData.obtenerRegistros()
  }

  constructor(public localData: DataLocalService) {}

  enviarmail(){
    this.localData.enviarCorreo();

  }

  abrirRegistro(registro: Registro){

    console.log('registro', registro)
    this.localData.abrirRegistro(registro)
  }

}
