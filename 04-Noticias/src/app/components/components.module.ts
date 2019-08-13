import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [NoticiaComponent,NoticiasComponent],
  
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [NoticiasComponent]
})
export class ComponentsModule { }
