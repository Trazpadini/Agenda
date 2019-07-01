import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaListaPage } from './planta-lista.page';

describe('PlantaListaPage', () => {
  let component: PlantaListaPage;
  let fixture: ComponentFixture<PlantaListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlantaListaPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
