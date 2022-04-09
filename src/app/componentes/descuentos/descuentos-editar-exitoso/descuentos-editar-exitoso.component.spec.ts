import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentosEditarExitosoComponent } from './descuentos-editar-exitoso.component';

describe('DescuentosEditarExitosoComponent', () => {
  let component: DescuentosEditarExitosoComponent;
  let fixture: ComponentFixture<DescuentosEditarExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescuentosEditarExitosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentosEditarExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
