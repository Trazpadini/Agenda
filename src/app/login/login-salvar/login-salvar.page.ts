import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-salvar',
  templateUrl: './login-salvar.page.html',
  styleUrls: ['./login-salvar.page.scss'],
})
export class LoginSalvarPage implements OnInit {

  constructor(private rota: Router) { }
  salvar3() {
    this.rota.navigate(['perfil-tela']);
  }
  ngOnInit() {
  }

}
