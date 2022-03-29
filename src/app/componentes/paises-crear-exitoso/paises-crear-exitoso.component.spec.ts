import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesCrearExitosoComponent } from './paises-crear-exitoso.component';

describe('PaisesCrearExitosoComponent', () => {
  let component: PaisesCrearExitosoComponent;
  let fixture: ComponentFixture<PaisesCrearExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesCrearExitosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesCrearExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
