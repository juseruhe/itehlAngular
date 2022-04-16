import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosModalidadesEliminarComponent } from './cursos-modalidades-eliminar.component';

describe('CursosModalidadesEliminarComponent', () => {
  let component: CursosModalidadesEliminarComponent;
  let fixture: ComponentFixture<CursosModalidadesEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosModalidadesEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosModalidadesEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
