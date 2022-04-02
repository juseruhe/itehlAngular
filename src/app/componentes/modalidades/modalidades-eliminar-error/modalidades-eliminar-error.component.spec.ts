import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadesEliminarErrorComponent } from './modalidades-eliminar-error.component';

describe('ModalidadesEliminarErrorComponent', () => {
  let component: ModalidadesEliminarErrorComponent;
  let fixture: ComponentFixture<ModalidadesEliminarErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadesEliminarErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadesEliminarErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
