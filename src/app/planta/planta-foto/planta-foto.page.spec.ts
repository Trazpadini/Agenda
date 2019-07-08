import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaFotoPage } from './planta-foto.page';

describe('PlantaFotoPage', () => {
  let component: PlantaFotoPage;
  let fixture: ComponentFixture<PlantaFotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantaFotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
