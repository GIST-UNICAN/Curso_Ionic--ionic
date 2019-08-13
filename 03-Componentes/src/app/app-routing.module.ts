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
  { path: 'infinite', loadChildren: './paginas/infinite/infinite.module#InfinitePageModule' },
  { path: 'input', loadChildren: './paginas/input/input.module#InputPageModule' },
  { path: 'list', loadChildren: './paginas/list/list.module#ListPageModule' },
  { path: 'list-reaorde', loadChildren: './paginas/list-reaorde/list-reaorde.module#ListReaordePageModule' },
  { path: 'loading', loadChildren: './paginas/loading/loading.module#LoadingPageModule' },
  { path: 'modal', loadChildren: './paginas/modal/modal.module#ModalPageModule' },
  { path: 'popover', loadChildren: './paginas/popover/popover.module#PopoverPageModule' },
  { path: 'progress', loadChildren: './paginas/progress/progress.module#ProgressPageModule' },
  { path: 'refrescador', loadChildren: './paginas/refrescador/refrescador.module#RefrescadorPageModule' },
  { path: 'buscador', loadChildren: './paginas/buscador/buscador.module#BuscadorPageModule' },
  { path: 'segment', loadChildren: './paginas/segment/segment.module#SegmentPageModule' },
  { path: 'slides', loadChildren: './paginas/slides/slides.module#SlidesPageModule' },
  { path: 'tabs', loadChildren: './paginas/tabs/tabs.module#TabsPageModule' },
  { path: 'toast', loadChildren: './paginas/toast/toast.module#ToastPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
