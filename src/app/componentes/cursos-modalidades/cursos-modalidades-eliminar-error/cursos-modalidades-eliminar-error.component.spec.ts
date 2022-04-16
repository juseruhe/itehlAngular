import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosModalidadesEliminarErrorComponent } from './cursos-modalidades-eliminar-error.component';

describe('CursosModalidadesEliminarErrorComponent', () => {
  let component: CursosModalidadesEliminarErrorComponent;
  let fixture: ComponentFixture<CursosModalidadesEliminarErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosModalidadesEliminarErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosModalidadesEliminarErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
