import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentosCrearComponent } from './descuentos-crear.component';

describe('DescuentosCrearComponent', () => {
  let component: DescuentosCrearComponent;
  let fixture: ComponentFixture<DescuentosCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescuentosCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentosCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
