import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlantaCadastroPage } from './planta-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: PlantaCadastroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlantaCadastroPage]
})
export class PlantaCadastroPageModule {}
