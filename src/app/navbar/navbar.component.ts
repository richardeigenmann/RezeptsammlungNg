import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categoriesPivot = new Map<string, Map<string, number>>();

  constructor(private _categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this._categoriesService.getCategories()
      .subscribe( (categories) => {
        this.categoriesPivot = categories ;
      } );
  };
  
  getTitle(): string { return 'Richi\'s Rezeptsammlung'; }
}


