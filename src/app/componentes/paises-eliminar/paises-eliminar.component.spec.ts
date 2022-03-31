import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesEliminarComponent } from './paises-eliminar.component';

describe('PaisesEliminarComponent', () => {
  let component: PaisesEliminarComponent;
  let fixture: ComponentFixture<PaisesEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
