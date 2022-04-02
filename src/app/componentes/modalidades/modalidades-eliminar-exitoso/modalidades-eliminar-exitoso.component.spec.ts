import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadesEliminarExitosoComponent } from './modalidades-eliminar-exitoso.component';

describe('ModalidadesEliminarExitosoComponent', () => {
  let component: ModalidadesEliminarExitosoComponent;
  let fixture: ComponentFixture<ModalidadesEliminarExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadesEliminarExitosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadesEliminarExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
