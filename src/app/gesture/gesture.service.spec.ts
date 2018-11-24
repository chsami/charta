/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GestureService } from './gesture.service';

describe('Service: Gesture', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestureService]
    });
  });

  it('should ...', inject([GestureService], (service: GestureService) => {
    expect(service).toBeTruthy();
  }));
});
