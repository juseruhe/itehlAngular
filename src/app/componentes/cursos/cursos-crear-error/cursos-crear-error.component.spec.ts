import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCrearErrorComponent } from './cursos-crear-error.component';

describe('CursosCrearErrorComponent', () => {
  let component: CursosCrearErrorComponent;
  let fixture: ComponentFixture<CursosCrearErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosCrearErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosCrearErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
