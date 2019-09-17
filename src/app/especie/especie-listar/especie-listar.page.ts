import { Component, OnInit } from '@angular/core';
import { Especie } from '../entidade/especie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-especie-listar',
  templateUrl: './especie-listar.page.html',
  styleUrls: ['./especie-listar.page.scss'],
})
export class EspecieListarPage implements OnInit {

  constructor( private fire: AngularFireDatabase) { }

  ngOnInit() {
  }

  excluir(key) {
      this.fire.list('especie').remove(key);
      alert("Você excluiu sua espécie");
    }
}
