import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlantaFotoPage } from './planta-foto.page';

const routes: Routes = [
  {
    path: '',
    component: PlantaFotoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlantaFotoPage]
})
export class PlantaFotoPageModule {}
