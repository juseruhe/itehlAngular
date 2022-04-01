import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesEliminarExitosoComponent } from './paises-eliminar-exitoso.component';

describe('PaisesEliminarExitosoComponent', () => {
  let component: PaisesEliminarExitosoComponent;
  let fixture: ComponentFixture<PaisesEliminarExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesEliminarExitosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesEliminarExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
