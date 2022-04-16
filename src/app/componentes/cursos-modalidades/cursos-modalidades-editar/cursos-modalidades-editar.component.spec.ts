import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosModalidadesEditarComponent } from './cursos-modalidades-editar.component';

describe('CursosModalidadesEditarComponent', () => {
  let component: CursosModalidadesEditarComponent;
  let fixture: ComponentFixture<CursosModalidadesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosModalidadesEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosModalidadesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
