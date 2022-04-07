import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosEliminarExitosoComponent } from './cursos-eliminar-exitoso.component';

describe('CursosEliminarExitosoComponent', () => {
  let component: CursosEliminarExitosoComponent;
  let fixture: ComponentFixture<CursosEliminarExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosEliminarExitosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosEliminarExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
