import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'contato-salvar', loadChildren: './contato/contato-salvar/contato-salvar.module#ContatoSalvarPageModule' },
  { path: 'contato-lista', loadChildren: './contato/contato-lista/contato-lista.module#ContatoListaPageModule' },
  { path: 'planta-lista', loadChildren: './planta/planta-lista/planta-lista.module#PlantaListaPageModule' },
  { path: 'planta-cadastro', loadChildren: './planta/planta-cadastro/planta-cadastro.module#PlantaCadastroPageModule' },
  { path: 'login-salvar', loadChildren: './login/login-salvar/login-salvar.module#LoginSalvarPageModule' },
  { path: 'perfil-tela', loadChildren: './perfil/perfil-tela/perfil-tela.module#PerfilTelaPageModule' },
  { path: 'cidade-salvar', loadChildren: './cidade/cidade-salvar/cidade-salvar.module#CidadeSalvarPageModule' },
  { path: 'cidade-listar', loadChildren: './cidade/cidade-listar/cidade-listar.module#CidadeListarPageModule' },
  { path: 'estado-salvar', loadChildren: './estado/estado-salvar/estado-salvar.module#EstadoSalvarPageModule' },
  { path: 'estado-listar', loadChildren: './estado/estado-listar/estado-listar.module#EstadoListarPageModule' },
  { path: 'especie-salvar', loadChildren: './especie/especie-salvar/especie-salvar.module#EspecieSalvarPageModule' },
  { path: 'especie-listar', loadChildren: './especie/especie-listar/especie-listar.module#EspecieListarPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [AngularFireAuth]
})
export class AppRoutingModule { }
