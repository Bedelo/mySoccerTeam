import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifEquipePage } from './modif-equipe.page';

const routes: Routes = [
  {
    path: '',
    component: ModifEquipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifEquipePageRoutingModule {}
