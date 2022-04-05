import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCrearComponent } from './cursos-crear.component';

describe('CursosCrearComponent', () => {
  let component: CursosCrearComponent;
  let fixture: ComponentFixture<CursosCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
