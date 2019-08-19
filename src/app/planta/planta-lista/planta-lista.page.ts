import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Planta } from '../entidade/planta';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-planta-lista',
  templateUrl: './planta-lista.page.html',
  styleUrls: ['./planta-lista.page.scss'],
})

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return items;
    terms = terms.toLowerCase();
    return items.filter( it => {
      return it.name.toLowerCase().includes(terms);
    });
  }
}
export class PlantaListaPage implements OnInit {

  plantalista: Observable<Planta[]>;
  constructor(private fire: AngularFireDatabase, private rota: Router) {
    this.plantalista = this.fire.list<Planta>('planta').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );
  }

  foto() {
    this.rota.navigate(['planta-foto']);
  }
  ngOnInit() {

  }
}
