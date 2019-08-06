import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', loadChildren: './paginas/start/start.module#StartPageModule' },
  { path: 'alert', loadChildren: './paginas/alert/alert.module#AlertPageModule' },
  { path: 'action-sheet', loadChildren: './paginas/action-sheet/action-sheet.module#ActionSheetPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
