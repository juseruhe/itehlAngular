import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesEliminarErrorComponent } from './paises-eliminar-error.component';

describe('PaisesEliminarErrorComponent', () => {
  let component: PaisesEliminarErrorComponent;
  let fixture: ComponentFixture<PaisesEliminarErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesEliminarErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesEliminarErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
