import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { FilterService } from '../services/filter.service';
import { Router } from '@angular/router';

@Component({
    selector: 'pm-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {

  categoriesPivot = new Map<string, Map<string, number>>();
  // see https://stackoverflow.com/questions/47079366/expression-has-changed-after-it-was-checked-during-iteration-by-map-keys-in-angu
  bindedCategoriesPivotKeys;

  constructor(
    private _categoriesService: CategoriesService,
    private _filterService: FilterService,
    private router: Router) {

  }

  ngOnInit() {
    this._categoriesService.getCategories()
      .subscribe( (categories) => {
        this.categoriesPivot = categories;
        this.bindedCategoriesPivotKeys = Array.from(this.categoriesPivot.keys());
      } );
  }

  getCategoryTypeValues(categoryType: string): string[] {
    //console.log("getCategoryTypeValues");
    //console.log(Array.from(this.categoriesPivot.get(categoryType).keys()).sort());
    return Array.from(this.categoriesPivot.get(categoryType).keys()).sort();
  }

  onSearchClick() {
    this.router.navigate(['/recipes']);
  }

  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    const character: string = target.value;
    this._filterService.announceSearch(character);
   }


}
