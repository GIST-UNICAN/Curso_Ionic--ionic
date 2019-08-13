import { PipesModule } from './../../pipes/pipes.module';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuscadorPage } from './buscador.page';

const routes: Routes = [
  {
    path: '',
    component: BuscadorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes), ComponentesModule, PipesModule
  ],
  declarations: [BuscadorPage]
})
export class BuscadorPageModule {}
