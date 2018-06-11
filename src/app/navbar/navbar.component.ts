import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { FilterService } from '../services/filter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categoriesPivot = new Map<string, Map<string, number>>();

  constructor(
    private _categoriesService: CategoriesService,
    private _filterService: FilterService,
    private router: Router) {

  }

  ngOnInit() {
    this._categoriesService.getCategories()
      .subscribe( (categories) => {
        this.categoriesPivot = categories ;
        console.log(categories);
      } );
  }

  getCategoryTypeValues(categoryType: string): string[] {
    return Array.from(this.categoriesPivot.get(categoryType).keys()).sort();
  }

  onSearchClick() {
    this.router.navigate(['/recipes']);
  }

  search(event: any): void {
    const character: string = event.target.value;
    this._filterService.announceSearch(character);
   }


}
