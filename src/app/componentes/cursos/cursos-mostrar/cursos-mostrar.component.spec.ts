import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosMostrarComponent } from './cursos-mostrar.component';

describe('CursosMostrarComponent', () => {
  let component: CursosMostrarComponent;
  let fixture: ComponentFixture<CursosMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosMostrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
