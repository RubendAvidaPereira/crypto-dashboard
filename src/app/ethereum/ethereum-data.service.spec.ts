import { TestBed } from '@angular/core/testing';

import { EthereumDataService } from './ethereum-data.service';

describe('EthereumDataService', () => {
  let service: EthereumDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EthereumDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
