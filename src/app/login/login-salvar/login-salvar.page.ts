import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { Login } from '../entidade/login';

@Component({
  selector: 'app-login-salvar',
  templateUrl: './login-salvar.page.html',
  styleUrls: ['./login-salvar.page.scss'],
})
export class LoginSalvarPage implements OnInit {
  ngOnInit() { }

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
  
  redefinir() {
    this.afAuth.auth.sendPasswordResetEmail(this.login.email).then(
      () => { this.rota.navigate(['home']); });
    alert("Verifique seu Email")
  }
}
