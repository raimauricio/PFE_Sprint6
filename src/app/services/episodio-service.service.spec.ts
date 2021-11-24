import { TestBed } from '@angular/core/testing';

import { EpisodioServiceService } from './episodio-service.service';

describe('EpisodioServiceService', () => {
  let service: EpisodioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
