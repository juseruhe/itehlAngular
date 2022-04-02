import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadesEliminarComponent } from './modalidades-eliminar.component';

describe('ModalidadesEliminarComponent', () => {
  let component: ModalidadesEliminarComponent;
  let fixture: ComponentFixture<ModalidadesEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadesEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadesEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
