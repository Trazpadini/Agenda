import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-perfil-tela',
  templateUrl: './perfil-tela.page.html',
  styleUrls: ['./perfil-tela.page.scss'],
})
export class PerfilTelaPage implements OnInit {

  constructor(private rota: Router) { }
  ir() {
    this.rota.navigate(['planta-cadastro']);
  }
  ngOnInit() {
  }

}
