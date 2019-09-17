import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Planta } from '../entidade/planta';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planta-lista',
  templateUrl: './planta-lista.page.html',
  styleUrls: ['./planta-lista.page.scss'],
})

export class PlantaListaPage implements OnInit {

  plantalista: Observable<Planta[]>;
  constructor(private fire: AngularFireDatabase, private rota: Router) {
    this.plantalista = this.fire.list<Planta>('planta').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );
  }

  ngOnInit() {

  }
}
