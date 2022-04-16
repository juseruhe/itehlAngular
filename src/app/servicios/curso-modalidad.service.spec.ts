import { TestBed } from '@angular/core/testing';

import { CursoModalidadService } from './curso-modalidad.service';

describe('CursoModalidadService', () => {
  let service: CursoModalidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoModalidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
