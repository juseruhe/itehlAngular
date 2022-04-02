import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadesCrearComponent } from './modalidades-crear.component';

describe('ModalidadesCrearComponent', () => {
  let component: ModalidadesCrearComponent;
  let fixture: ComponentFixture<ModalidadesCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadesCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
