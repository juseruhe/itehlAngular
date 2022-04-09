import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentosEliminarComponent } from './descuentos-eliminar.component';

describe('DescuentosEliminarComponent', () => {
  let component: DescuentosEliminarComponent;
  let fixture: ComponentFixture<DescuentosEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescuentosEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentosEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
