import { TestBed } from '@angular/core/testing';

import { PageNumService } from './page-num.service';

describe('PageNumService', () => {
  let service: PageNumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageNumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
