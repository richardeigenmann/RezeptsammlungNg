import { TestBed } from '@angular/core/testing';

import { StatsService } from './stats';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { RecipeFetchService } from './recipeFetchService';
import { RecipeSiteService } from './recipe-site';

describe('StatsService', () => {
  let service: StatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: RecipeFetchService,
          useValue: {
            getRecipesSignal: () => signal([
              { filename: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp161.htm', name: 'Gedämpfte Kefen' },
              { filename: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp269.htm', name: 'Flambierte Pfirsich' },
              { filename: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp526.htm', name: 'Buchweizen-Gemüsesalat mit Cashew-Dressing' },
              { filename: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp171.htm', name: 'Riz Colonial' },
              { filename: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp001.htm', name: 'Beeren-Tiramisu' },
              { filename: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp074.htm', name: 'Rotzungenfiletröllchen mit Meerrettichsauce' },
              { filename: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp091.htm', name: 'Szegediner Gulasch Variante' },
              { filename: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp175.htm', name: 'Panang Hackfleischbällchen' },
              { filename: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp362.htm', name: 'Reis aus dem Dampfkochtopf' },
              { filename: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp403.htm', name: 'Seezugenfilets vom Grill mit Peperoni' }
            ])
          }
        },
        {
          provide: RecipeSiteService,
          useValue: {
            getRecipeSite: () => 'https://richardeigenmann.github.io/Rezeptsammlung'
          }
        }
      ]
    });
    service = TestBed.inject(StatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the correct stats date signal', () => {
    expect(service.getStatsDate()()).toBe('31.7.2026');
  });

  it('should return the correct stats data signal', () => {
    const stats = service.getStatsData()();
    expect(stats.length).toBe(10);
    expect(stats[0].recipeName).toBe('Gedämpfte Kefen');
  });
});
