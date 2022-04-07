import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosEliminarErrorComponent } from './cursos-eliminar-error.component';

describe('CursosEliminarErrorComponent', () => {
  let component: CursosEliminarErrorComponent;
  let fixture: ComponentFixture<CursosEliminarErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosEliminarErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosEliminarErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
