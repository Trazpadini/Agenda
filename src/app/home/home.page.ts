import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login/entidade/login';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  login: Login = new Login();

  constructor(private rota: Router) { }

  direcionar() {
    this.rota.navigate(['contato-salvar']);
  }

  logar1() {
    this.rota.navigate(['login-salvar']);
  }
}
