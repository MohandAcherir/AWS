import { TestBed } from '@angular/core/testing';

import { ExerciceDetailsService } from './exercice-details.service';

describe('ExerciceDetailsService', () => {
  let service: ExerciceDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciceDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
