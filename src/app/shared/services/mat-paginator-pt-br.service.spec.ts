import { TestBed } from '@angular/core/testing';

import { MatPaginatorPtBrService } from './mat-paginator-pt-br.service';

describe('MatPaginatorPtBrService', () => {
  let service: MatPaginatorPtBrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatPaginatorPtBrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
