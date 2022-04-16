import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosModalidadesCrearComponent } from './cursos-modalidades-crear.component';

describe('CursosModalidadesCrearComponent', () => {
  let component: CursosModalidadesCrearComponent;
  let fixture: ComponentFixture<CursosModalidadesCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosModalidadesCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosModalidadesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
