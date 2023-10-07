import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  statsDate = '16.2.2021'
  totalViews = 0

  stats = [
    { recipeName: 'Gedämpfte Kefen',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp161.htm',
      views: 98,
      percent: 17.01
    },
    { recipeName: "Reis aus dem Dampkochtopf",
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp362.htm',
      views: 60,
      percent: 10.42
    },
    { recipeName: 'Kalbsvoressen Salvia',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp341.htm',
      views: 56,
      percent: 9.72
    },
    { recipeName: 'Ueberbackene Lauch Schinkenrollen',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp358.htm',
      views: 44,
      percent: 7.64
    },
    { recipeName: 'Müscheli-Topf (Pasta)',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp336.htm',
      views: 27,
      percent: 4.69
    },
    { recipeName: 'Gerollte Felchenfilets à la Provençale',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp375.htm',
      views: 26,
      percent: 4.51
    },
    { recipeName: 'Poulet mit Cashew-Nüssen',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp337.htm',
      views: 20,
      percent: 3.47
    },
    { recipeName: 'Schwarzwäldertorte mit Himbeeren',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp511.htm',
      views: 20,
      percent: 3.47
    },
    { recipeName: 'Glasierte Kastanien nach Betty Bossi',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp379.htm',
      views: 14,
      percent: 2.43
    },
    { recipeName: 'Französischer Orangencake',
      url: 'https://richardeigenmann.github.io/Rezeptsammlung/Rcp154.htm',
      views: 11,
      percent: 1.915
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.totalViews = this.stats.reduce((sum, it) => sum + it.views, 0);
  }

}
