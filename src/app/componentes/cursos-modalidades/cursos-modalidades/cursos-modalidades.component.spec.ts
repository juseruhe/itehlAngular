import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosModalidadesComponent } from './cursos-modalidades.component';

describe('CursosModalidadesComponent', () => {
  let component: CursosModalidadesComponent;
  let fixture: ComponentFixture<CursosModalidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosModalidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosModalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
