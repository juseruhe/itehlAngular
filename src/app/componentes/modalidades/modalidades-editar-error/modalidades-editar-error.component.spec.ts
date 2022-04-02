import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadesEditarErrorComponent } from './modalidades-editar-error.component';

describe('ModalidadesEditarErrorComponent', () => {
  let component: ModalidadesEditarErrorComponent;
  let fixture: ComponentFixture<ModalidadesEditarErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadesEditarErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadesEditarErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
