import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosModalidadesMostrarComponent } from './cursos-modalidades-mostrar.component';

describe('CursosModalidadesMostrarComponent', () => {
  let component: CursosModalidadesMostrarComponent;
  let fixture: ComponentFixture<CursosModalidadesMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosModalidadesMostrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosModalidadesMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
