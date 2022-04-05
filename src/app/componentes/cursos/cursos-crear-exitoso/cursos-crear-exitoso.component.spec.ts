import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCrearExitosoComponent } from './cursos-crear-exitoso.component';

describe('CursosCrearExitosoComponent', () => {
  let component: CursosCrearExitosoComponent;
  let fixture: ComponentFixture<CursosCrearExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosCrearExitosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosCrearExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
