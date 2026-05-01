import { TestBed } from '@angular/core/testing';

import { StatsService } from './stats';
import { provideZonelessChangeDetection } from '@angular/core';

describe('StatsService', () => {
  let service: StatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(StatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the correct stats date signal', () => {
    expect(service.getStatsDate()()).toBe('31.7.2025');
  });

  it('should return the correct stats data signal', () => {
    const stats = service.getStatsData()();
    expect(stats.length).toBe(10);
    expect(stats[0].recipeName).toBe('Gerollte Felchenfilets à la Provençale');
  });
});
