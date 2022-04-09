import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentosMostrarComponent } from './descuentos-mostrar.component';

describe('DescuentosMostrarComponent', () => {
  let component: DescuentosMostrarComponent;
  let fixture: ComponentFixture<DescuentosMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescuentosMostrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentosMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
