import { Component, OnInit } from '@angular/core';
import { Contato } from '../entidade/contato';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Estado } from '../../estado/entidade/estado';
import { Cidade } from '../../cidade/entidade/cidade';

@Component({
  selector: 'app-contato-salvar',
  templateUrl: './contato-salvar.page.html',
  styleUrls: ['./contato-salvar.page.scss'],
})
export class ContatoSalvarPage implements OnInit {

  contato: Contato = new Contato();
  cidade: Cidade = new Cidade();
  listaEstado: Observable<Estado[]>;
  constructor(private fire: AngularFireDatabase, private rota: Router) {
    this.listaEstado = this.fire.list<Estado>('estado').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  ngOnInit() {
  }
  salvar() {
    this.fire.list('contato').push(this.contato);
    this.contato = new Contato();
    this.rota.navigate(['contato-lista']);
    alert('Você foi cadastrado com sucesso!');
  }
  salvar2() {
    this.fire.list('cidade').push(this.cidade);
    this.cidade = new Cidade();
    this.rota.navigate(['listar-cidade']);
  }
}
