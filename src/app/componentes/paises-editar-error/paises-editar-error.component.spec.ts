import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesEditarErrorComponent } from './paises-editar-error.component';

describe('PaisesEditarErrorComponent', () => {
  let component: PaisesEditarErrorComponent;
  let fixture: ComponentFixture<PaisesEditarErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesEditarErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesEditarErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
