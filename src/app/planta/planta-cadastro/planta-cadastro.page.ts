import { Component, OnInit } from '@angular/core';
import { Planta } from '../entidade/planta';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Especie } from '../../especie/entidade/especie';

@Component({
  selector: 'app-planta-cadastro',
  templateUrl: './planta-cadastro.page.html',
  styleUrls: ['./planta-cadastro.page.scss'],
})
export class PlantaCadastroPage implements OnInit {

    planta: Planta = new Planta();
    listaEspecie: Observable<Especie[]>;

  constructor(private fire: AngularFireDatabase, private rota: Router) {
    this.listaEspecie = this.fire.list<Especie>('especie').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  ngOnInit() {
  }
  salvar2() {
    this.fire.list('planta').push(this.planta);
    this.planta = new Planta();
    this.rota.navigate(['planta-lista']);
    alert('Sua espécie foi salva!');
  }

}
