import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaCadastroPage } from './planta-cadastro.page';

describe('PlantaCadastroPage', () => {
  let component: PlantaCadastroPage;
  let fixture: ComponentFixture<PlantaCadastroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantaCadastroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
