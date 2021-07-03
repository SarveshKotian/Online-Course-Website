import { TestBed } from '@angular/core/testing';

import { StudServiceService } from './stud-service.service';

describe('StudServiceService', () => {
  let service: StudServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
