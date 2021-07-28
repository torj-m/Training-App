import { TestBed } from '@angular/core/testing';

import { FakeparticipantServiceService } from './fakeparticipant-service.service';

describe('FakeparticipantServiceService', () => {
  let service: FakeparticipantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeparticipantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
