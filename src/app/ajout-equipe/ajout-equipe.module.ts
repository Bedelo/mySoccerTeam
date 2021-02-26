import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutEquipePageRoutingModule } from './ajout-equipe-routing.module';

import { AjoutEquipePage } from './ajout-equipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutEquipePageRoutingModule
  ],
  declarations: [AjoutEquipePage]
})
export class AjoutEquipePageModule {}
