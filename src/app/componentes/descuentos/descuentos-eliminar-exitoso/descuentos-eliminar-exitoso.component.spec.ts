import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentosEliminarExitosoComponent } from './descuentos-eliminar-exitoso.component';

describe('DescuentosEliminarExitosoComponent', () => {
  let component: DescuentosEliminarExitosoComponent;
  let fixture: ComponentFixture<DescuentosEliminarExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescuentosEliminarExitosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentosEliminarExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
