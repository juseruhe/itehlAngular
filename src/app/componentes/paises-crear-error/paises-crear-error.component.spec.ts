import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesCrearErrorComponent } from './paises-crear-error.component';

describe('PaisesCrearErrorComponent', () => {
  let component: PaisesCrearErrorComponent;
  let fixture: ComponentFixture<PaisesCrearErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesCrearErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesCrearErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
