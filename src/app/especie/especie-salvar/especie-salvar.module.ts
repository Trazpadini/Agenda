import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EspecieSalvarPage } from './especie-salvar.page';

const routes: Routes = [
  {
    path: '',
    component: EspecieSalvarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EspecieSalvarPage]
})
export class EspecieSalvarPageModule {}
