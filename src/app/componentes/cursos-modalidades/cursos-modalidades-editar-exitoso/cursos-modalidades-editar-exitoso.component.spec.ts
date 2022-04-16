import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosModalidadesEditarExitosoComponent } from './cursos-modalidades-editar-exitoso.component';

describe('CursosModalidadesEditarExitosoComponent', () => {
  let component: CursosModalidadesEditarExitosoComponent;
  let fixture: ComponentFixture<CursosModalidadesEditarExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosModalidadesEditarExitosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosModalidadesEditarExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
