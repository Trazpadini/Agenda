import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Login } from '../entidade/login';

@Component({
  selector: 'app-login-salvar',
  templateUrl: './login-salvar.page.html',
  styleUrls: ['./login-salvar.page.scss'],
})
export class LoginSalvarPage implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  login: Login = new Login();

  constructor(private rota: Router, private afAuth: AngularFireAuth) { }
  logar() {
    this.afAuth.auth.signInWithEmailAndPassword(this.login.email, this.login.senha).then(
      () => { this.rota.navigate(['perfil-tela']); }
    ).catch((erro) => console.log(erro));
  }
  logout() {
    this.afAuth.auth.signOut();
    this.rota.navigate(['/']);
  }
}
