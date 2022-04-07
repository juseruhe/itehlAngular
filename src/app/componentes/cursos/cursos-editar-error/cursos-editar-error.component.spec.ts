import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosEditarErrorComponent } from './cursos-editar-error.component';

describe('CursosEditarErrorComponent', () => {
  let component: CursosEditarErrorComponent;
  let fixture: ComponentFixture<CursosEditarErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosEditarErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosEditarErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
