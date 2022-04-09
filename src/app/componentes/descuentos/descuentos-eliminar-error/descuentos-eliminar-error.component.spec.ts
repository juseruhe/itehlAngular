import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentosEliminarErrorComponent } from './descuentos-eliminar-error.component';

describe('DescuentosEliminarErrorComponent', () => {
  let component: DescuentosEliminarErrorComponent;
  let fixture: ComponentFixture<DescuentosEliminarErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescuentosEliminarErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentosEliminarErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
