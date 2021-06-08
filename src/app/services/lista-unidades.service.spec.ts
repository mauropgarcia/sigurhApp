import { TestBed } from '@angular/core/testing';

import { ListaUnidadesService } from './lista-unidades.service';

describe('ListaUnidadesService', () => {
  let service: ListaUnidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaUnidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
