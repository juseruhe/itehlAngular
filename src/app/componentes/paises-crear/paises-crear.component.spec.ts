import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesCrearComponent } from './paises-crear.component';

describe('PaisesCrearComponent', () => {
  let component: PaisesCrearComponent;
  let fixture: ComponentFixture<PaisesCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
