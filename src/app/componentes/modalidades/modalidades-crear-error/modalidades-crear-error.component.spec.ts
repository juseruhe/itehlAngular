import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadesCrearErrorComponent } from './modalidades-crear-error.component';

describe('ModalidadesCrearErrorComponent', () => {
  let component: ModalidadesCrearErrorComponent;
  let fixture: ComponentFixture<ModalidadesCrearErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadesCrearErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadesCrearErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
