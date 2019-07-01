import { Component, OnInit } from '@angular/core';
import { Planta } from '../entidade/planta';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planta-cadastro',
  templateUrl: './planta-cadastro.page.html',
  styleUrls: ['./planta-cadastro.page.scss'],
})
export class PlantaCadastroPage implements OnInit {

    planta: Planta = new Planta();
    constructor(private fire: AngularFireDatabase, private rota: Router) { }

    ngOnInit() {
    }
    salvar2() {
      this.fire.list('planta').push(this.planta);
      this.planta = new Planta();
      this.rota.navigate(['planta-lista']);
      alert('Sua espécie foi salva!');
  }

}
