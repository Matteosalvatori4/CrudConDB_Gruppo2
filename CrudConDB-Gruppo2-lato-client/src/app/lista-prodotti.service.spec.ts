import { TestBed } from '@angular/core/testing';

import { ListaProdottiService } from './lista-prodotti.service';

describe('ListaProdottiService', () => {
  let service: ListaProdottiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaProdottiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
