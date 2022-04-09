import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentosEditarErrorComponent } from './descuentos-editar-error.component';

describe('DescuentosEditarErrorComponent', () => {
  let component: DescuentosEditarErrorComponent;
  let fixture: ComponentFixture<DescuentosEditarErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescuentosEditarErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentosEditarErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
