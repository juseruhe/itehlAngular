import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentosCrearErrorComponent } from './descuentos-crear-error.component';

describe('DescuentosCrearErrorComponent', () => {
  let component: DescuentosCrearErrorComponent;
  let fixture: ComponentFixture<DescuentosCrearErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescuentosCrearErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentosCrearErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
