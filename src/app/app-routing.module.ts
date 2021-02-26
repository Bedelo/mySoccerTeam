import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'list-equipe',
    loadChildren: () => import('./list-equipe/list-equipe.module').then( m => m.ListEquipePageModule)
  },
  {
    path: 'ajout-equipe',
    loadChildren: () => import('./ajout-equipe/ajout-equipe.module').then( m => m.AjoutEquipePageModule)
  },
  {
    path: 'modif-equipe',
    loadChildren: () => import('./modif-equipe/modif-equipe.module').then( m => m.ModifEquipePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
