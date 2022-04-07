import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosEliminarComponent } from './cursos-eliminar.component';

describe('CursosEliminarComponent', () => {
  let component: CursosEliminarComponent;
  let fixture: ComponentFixture<CursosEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
