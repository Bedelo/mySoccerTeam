import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifEquipePageRoutingModule } from './modif-equipe-routing.module';

import { ModifEquipePage } from './modif-equipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifEquipePageRoutingModule
  ],
  declarations: [ModifEquipePage]
})
export class ModifEquipePageModule {}
