import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecieSalvarPage } from './especie-salvar.page';

describe('EspecieSalvarPage', () => {
  let component: EspecieSalvarPage;
  let fixture: ComponentFixture<EspecieSalvarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecieSalvarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecieSalvarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
