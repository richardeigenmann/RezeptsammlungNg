import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { FilterService } from '../services/filter.service';
import { Router, RouterLinkActive, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { MenuaboutComponent } from '../menuabout/menuabout.component';
import { EncodeURI } from '../shared/encodeUri.pipe';

@Component({
    selector: 'pm-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    imports: [RouterLinkActive, RouterLink, NgFor, MenuaboutComponent, EncodeURI],
    standalone: true,
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

  search(event: any): void {
    const character: string = event.target.value;
    this._filterService.announceSearch(character);
   }


}
