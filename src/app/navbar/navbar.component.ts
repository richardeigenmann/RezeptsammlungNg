import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories = new Map<string, Map<string, number>>(); 

  constructor() {
    this.categories.set('Region', new Map<string, number>().set('Region1',20));
    this.categories.get('Region').set('Region2',20);
    this.categories.get('Region').set('Region3',15);
    this.categories.set('Zutat', new Map<string, number>().set('Z1',20));
    this.categories.set('Quelle', new Map<string, number>().set('Q1',20));

   }

  ngOnInit() {
  }

  getTitle(): string {return 'Richi\'s Rezeptsammlung';}
}
