import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentosEditarComponent } from './descuentos-editar.component';

describe('DescuentosEditarComponent', () => {
  let component: DescuentosEditarComponent;
  let fixture: ComponentFixture<DescuentosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescuentosEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
