import { TestBed, inject } from '@angular/core/testing';

import { ContractenService } from './contracten.service';

describe('ContractenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContractenService]
    });
  });

  it('should be created', inject([ContractenService], (service: ContractenService) => {
    expect(service).toBeTruthy();
  }));
});
