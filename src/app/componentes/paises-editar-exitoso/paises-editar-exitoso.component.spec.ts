import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesEditarExitosoComponent } from './paises-editar-exitoso.component';

describe('PaisesEditarExitosoComponent', () => {
  let component: PaisesEditarExitosoComponent;
  let fixture: ComponentFixture<PaisesEditarExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesEditarExitosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesEditarExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
