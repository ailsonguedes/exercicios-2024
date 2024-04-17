import { TestBed } from '@angular/core/testing';

import { DiscussionstopicService } from './discussionstopic.service';

describe('DiscussionstopicService', () => {
  let service: DiscussionstopicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscussionstopicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
