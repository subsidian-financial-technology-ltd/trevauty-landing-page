import { TestBed } from '@angular/core/testing';

import { ManageTerminalService } from './manage-terminal.service';

describe('ManageTerminalService', () => {
  let service: ManageTerminalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageTerminalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
