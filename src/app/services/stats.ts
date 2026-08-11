import { Injectable, signal, Signal } from '@angular/core';
import { IStat } from '../shared/stat';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private readonly _statsDate = signal('31.7.2026');

  private readonly _stats = signal<IStat[]>([
    { recipeName: 'Gedämpfte Kefen',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp161.htm',
      views: 11
    },
    { recipeName: 'Flambierte Pfirsich',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp269.htm',
      views: 5
    },
    { recipeName: "Buchweizen-Gemüsesalat mit Cashew-Dressing",
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp526.htm',
      views: 5
    },
    { recipeName: 'Riz Colonial',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp171.htm',
      views: 4
    },
    { recipeName: 'Beeren-Tiramisu',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp001.htm',
      views: 3
    },
    { recipeName: 'Rotzungenfiletröllchen mit Meerrettichsauce',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp074.htm',
      views: 3
    },
    { recipeName: 'Szegediner Gulasch Variante',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp091.htm',
      views: 3
    },
    { recipeName: 'Panang Hackfleischbällchen',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp175.htm',
      views: 3
    },
    { recipeName: 'Reis aus dem Dampfkochtopf',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp362.htm',
      views: 3
    },
  ]);

  getStatsDate(): Signal<string> {
    return this._statsDate.asReadonly();
  }

  getStatsData(): Signal<IStat[]> {
   return this._stats.asReadonly();
  }
}
