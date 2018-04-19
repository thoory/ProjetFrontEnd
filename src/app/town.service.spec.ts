import { TestBed, inject } from '@angular/core/testing';

import { TownService } from './town.service';

describe('TownService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TownService]
    });
  });

  it('should be created', inject([TownService], (service: TownService) => {
    expect(service).toBeTruthy();
  }));
});
