import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosModalidadesEliminarExitosoComponent } from './cursos-modalidades-eliminar-exitoso.component';

describe('CursosModalidadesEliminarExitosoComponent', () => {
  let component: CursosModalidadesEliminarExitosoComponent;
  let fixture: ComponentFixture<CursosModalidadesEliminarExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosModalidadesEliminarExitosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosModalidadesEliminarExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
