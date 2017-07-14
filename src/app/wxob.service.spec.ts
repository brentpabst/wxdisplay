import { TestBed, inject } from '@angular/core/testing';

import { WxObService } from './wxob.service';

describe('WxObService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WxObService]
    });
  });

  it('should be created', inject([WxObService], (service: WxObService) => {
    expect(service).toBeTruthy();
  }));
});
