import { ComponentesModule } from './../../componentes/componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPagePage } from './modal-page.page';


@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesModule
  ],
  declarations: [ModalPagePage]
})
export class ModalPagePageModule {}
