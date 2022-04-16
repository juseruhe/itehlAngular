import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosModalidadesCrearErrorComponent } from './cursos-modalidades-crear-error.component';

describe('CursosModalidadesCrearErrorComponent', () => {
  let component: CursosModalidadesCrearErrorComponent;
  let fixture: ComponentFixture<CursosModalidadesCrearErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosModalidadesCrearErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosModalidadesCrearErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
