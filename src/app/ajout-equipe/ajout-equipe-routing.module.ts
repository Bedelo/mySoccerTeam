import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutEquipePage } from './ajout-equipe.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutEquipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutEquipePageRoutingModule {}
