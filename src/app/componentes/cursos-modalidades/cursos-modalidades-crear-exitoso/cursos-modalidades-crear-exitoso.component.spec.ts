import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosModalidadesCrearExitosoComponent } from './cursos-modalidades-crear-exitoso.component';

describe('CursosModalidadesCrearExitosoComponent', () => {
  let component: CursosModalidadesCrearExitosoComponent;
  let fixture: ComponentFixture<CursosModalidadesCrearExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosModalidadesCrearExitosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosModalidadesCrearExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
