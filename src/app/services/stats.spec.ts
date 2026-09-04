import { TestBed } from '@angular/core/testing';

import { StatsService } from './stats';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { RecipeFetchService } from './recipeFetchService';
import { RecipeSiteService } from './recipe-site';
import { STATS_DATA } from './stats-data.token';

const TEST_SITE = 'https://example.com/recipes';
const TEST_DATE = '1.1.2000';

const mockRecipes = [
  { filename: `${TEST_SITE}/Rcp001.htm`, name: 'Apfelkuchen' },
  { filename: `${TEST_SITE}/Rcp002.htm`, name: 'Bananenbrot' },
];

const mockStatsData = {
  date: TEST_DATE,
  stats: [
    { filename: 'Rcp001.htm', views: 42 },
    { filename: 'Rcp002.htm', views: 7 },
    { filename: 'Rcp999.htm', views: 1 }, // no matching recipe → falls back to filename
  ]
};

describe('StatsService', () => {
  let service: StatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        { provide: STATS_DATA, useValue: mockStatsData },
        {
          provide: RecipeFetchService,
          useValue: { getRecipesSignal: () => signal(mockRecipes) }
        },
        {
          provide: RecipeSiteService,
          useValue: { getRecipeSite: () => TEST_SITE }
        }
      ]
    });
    service = TestBed.inject(StatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the stats date from the injected data', () => {
    expect(service.getStatsDate()()).toBe(TEST_DATE);
  });

  it('should return the correct number of stats entries', () => {
    expect(service.getStatsData()().length).toBe(mockStatsData.stats.length);
  });

  it('should resolve recipe names from the recipe list', () => {
    const stats = service.getStatsData()();
    expect(stats[0].recipeName).toBe('Apfelkuchen');
    expect(stats[1].recipeName).toBe('Bananenbrot');
  });

  it('should fall back to filename when recipe is not found', () => {
    const stats = service.getStatsData()();
    expect(stats[2].recipeName).toBe('Rcp999.htm');
  });

  it('should build correct URLs using the site URL and filename', () => {
    const stats = service.getStatsData()();
    expect(stats[0].url).toBe(`${TEST_SITE}/Rcp001.htm`);
  });

  it('should include view counts', () => {
    const stats = service.getStatsData()();
    expect(stats[0].views).toBe(42);
    expect(stats[1].views).toBe(7);
  });
});
