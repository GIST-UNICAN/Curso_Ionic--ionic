import { TestBed } from '@angular/core/testing';

import { DescargadorService } from './descargador.service';

describe('DescargadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DescargadorService = TestBed.get(DescargadorService);
    expect(service).toBeTruthy();
  });
});
