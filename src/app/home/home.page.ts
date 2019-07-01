import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private rota: Router) { }

  direcionar() {
    this.rota.navigate(['contato-salvar']);
  }
  ir() {
    this.rota.navigate(['planta-cadastro']);
  }

  logar() {
    this.rota.navigate(['login-salvar']);

  }
  ir2() {
    this.rota.navigate(['planta-lista']);
  }
}
