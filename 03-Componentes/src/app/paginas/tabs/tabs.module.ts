import { AvatarPageModule } from './../avatar/avatar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { 
            path: 'avatar',
            loadChildren: '../avatar/avatar.module#AvatarPageModule'       
      },
      { 
        path: 'list',
        loadChildren: '../list/list.module#ListPageModule'       
  },
  { 
    path: 'slides',
    loadChildren: '../slides/slides.module#SlidesPageModule'       
}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AvatarPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
