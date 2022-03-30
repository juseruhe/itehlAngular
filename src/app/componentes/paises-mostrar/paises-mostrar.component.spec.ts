import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesMostrarComponent } from './paises-mostrar.component';

describe('PaisesMostrarComponent', () => {
  let component: PaisesMostrarComponent;
  let fixture: ComponentFixture<PaisesMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesMostrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
