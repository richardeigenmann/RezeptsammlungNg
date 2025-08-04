import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  statsDate: String = '31.7.2025'

  stats = [
    { recipeName: 'Gerollte Felchenfilets à la Provençale',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp375.htm',
      views: 74
    },
    { recipeName: "Reis aus dem Dampkochtopf",
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp362.htm',
      views: 71
    },
    { recipeName: 'Kalbsvoressen Salvia',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp341.htm',
      views: 47
    },
    { recipeName: 'Müscheli-Topf (Pasta)',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp336.htm',
      views: 34
    },
    { recipeName: 'Gedämpfte Kefen',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp161.htm',
      views: 27
    },
    { recipeName: 'Rumtopf',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp272.htm',
      views: 17
    },
    { recipeName: 'Riz Colonial',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp171.htm',
      views: 16
    },
    { recipeName: 'Othello-Torte',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp309.htm',
      views: 14
    },
    { recipeName: 'Schwarzwäldertorte mit Himbeeren',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp511.htm',
      views: 14
    },
    { recipeName: 'Fruchtwähen',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp299.htm',
      views: 10
    },
  ]

  getStatsDate() : String {
    return this.statsDate;
  }


  getStatsData(): Observable<any> {
   return from(this.stats);
  }
}
