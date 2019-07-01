import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSalvarPage } from './login-salvar.page';

describe('LoginSalvarPage', () => {
  let component: LoginSalvarPage;
  let fixture: ComponentFixture<LoginSalvarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSalvarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSalvarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
