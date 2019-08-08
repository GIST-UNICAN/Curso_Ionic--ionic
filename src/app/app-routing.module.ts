import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', loadChildren: './paginas/start/start.module#StartPageModule' },
  { path: 'alert', loadChildren: './paginas/alert/alert.module#AlertPageModule' },
  { path: 'action-sheet', loadChildren: './paginas/action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'avatar', loadChildren: './paginas/avatar/avatar.module#AvatarPageModule' },
  { path: 'botones', loadChildren: './paginas/botones/botones.module#BotonesPageModule' },
  { path: 'cards', loadChildren: './paginas/cards/cards.module#CardsPageModule' },
  { path: 'checboxes', loadChildren: './paginas/checboxes/checboxes.module#ChecboxesPageModule' },
  { path: 'calendar', loadChildren: './paginas/calendar/calendar.module#CalendarPageModule' },
  { path: 'fab', loadChildren: './paginas/fab/fab.module#FabPageModule' },
  { path: 'grid-row', loadChildren: './paginas/grid-row/grid-row.module#GridRowPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
