import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListEquipePageRoutingModule } from './list-equipe-routing.module';

import { ListEquipePage } from './list-equipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListEquipePageRoutingModule
  ],
  declarations: [ListEquipePage]
})
export class ListEquipePageModule {}
