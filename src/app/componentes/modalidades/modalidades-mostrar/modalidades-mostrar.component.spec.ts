import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadesMostrarComponent } from './modalidades-mostrar.component';

describe('ModalidadesMostrarComponent', () => {
  let component: ModalidadesMostrarComponent;
  let fixture: ComponentFixture<ModalidadesMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadesMostrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadesMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
