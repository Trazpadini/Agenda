import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilTelaPage } from './perfil-tela.page';

describe('PerfilTelaPage', () => {
  let component: PerfilTelaPage;
  let fixture: ComponentFixture<PerfilTelaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilTelaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilTelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
