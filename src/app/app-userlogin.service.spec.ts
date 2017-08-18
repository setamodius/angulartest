import { TestBed, inject } from '@angular/core/testing';

import { AppUserloginService } from './app-userlogin.service';

describe('AppUserloginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppUserloginService]
    });
  });

  it('should be created', inject([AppUserloginService], (service: AppUserloginService) => {
    expect(service).toBeTruthy();
  }));
});
