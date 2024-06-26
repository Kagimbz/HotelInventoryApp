import { TestBed } from '@angular/core/testing';

import { RoomsService } from './rooms.service';

describe('RoomsService', () => {
  let service: RoomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 6 or more rooms', () => {
    service.getRooms().subscribe(rooms => {
      expect(rooms.length).toBeGreaterThanOrEqual(6);
    })
  });
});
