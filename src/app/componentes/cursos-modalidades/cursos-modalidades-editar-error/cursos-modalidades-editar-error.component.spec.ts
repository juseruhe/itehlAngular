import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosModalidadesEditarErrorComponent } from './cursos-modalidades-editar-error.component';

describe('CursosModalidadesEditarErrorComponent', () => {
  let component: CursosModalidadesEditarErrorComponent;
  let fixture: ComponentFixture<CursosModalidadesEditarErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosModalidadesEditarErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosModalidadesEditarErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
