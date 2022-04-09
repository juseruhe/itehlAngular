import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentosCrearExitosoComponent } from './descuentos-crear-exitoso.component';

describe('DescuentosCrearExitosoComponent', () => {
  let component: DescuentosCrearExitosoComponent;
  let fixture: ComponentFixture<DescuentosCrearExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescuentosCrearExitosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentosCrearExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
