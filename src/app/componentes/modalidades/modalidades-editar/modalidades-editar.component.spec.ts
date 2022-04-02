import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadesEditarComponent } from './modalidades-editar.component';

describe('ModalidadesEditarComponent', () => {
  let component: ModalidadesEditarComponent;
  let fixture: ComponentFixture<ModalidadesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadesEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
