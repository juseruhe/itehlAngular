import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosEditarExitosoComponent } from './cursos-editar-exitoso.component';

describe('CursosEditarExitosoComponent', () => {
  let component: CursosEditarExitosoComponent;
  let fixture: ComponentFixture<CursosEditarExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosEditarExitosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosEditarExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
