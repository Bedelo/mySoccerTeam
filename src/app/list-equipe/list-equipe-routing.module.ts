import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEquipePage } from './list-equipe.page';

const routes: Routes = [
  {
    path: '',
    component: ListEquipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListEquipePageRoutingModule {}
