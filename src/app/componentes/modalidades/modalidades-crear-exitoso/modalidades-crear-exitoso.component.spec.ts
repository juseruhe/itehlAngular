import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadesCrearExitosoComponent } from './modalidades-crear-exitoso.component';

describe('ModalidadesCrearExitosoComponent', () => {
  let component: ModalidadesCrearExitosoComponent;
  let fixture: ComponentFixture<ModalidadesCrearExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadesCrearExitosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadesCrearExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
