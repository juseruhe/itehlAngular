import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadesEditarExitosoComponent } from './modalidades-editar-exitoso.component';

describe('ModalidadesEditarExitosoComponent', () => {
  let component: ModalidadesEditarExitosoComponent;
  let fixture: ComponentFixture<ModalidadesEditarExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadesEditarExitosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadesEditarExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
