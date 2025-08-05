import { Component, OnInit, inject } from '@angular/core';
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
  private _categoriesService = inject(CategoriesService);
  private _filterService = inject(FilterService);
  private router = inject(Router);


  categoriesPivot = new Map<string, Map<string, number>>();
  bindedCategoriesPivotKeys: string[];

  ngOnInit() {
    this._categoriesService.getCategories()
      .subscribe( (categories: Map<string, Map<string, number>>) => {
        this.categoriesPivot = categories;
        this.bindedCategoriesPivotKeys = Array.from(this.categoriesPivot.keys());
      } );
  }

  getCategoryTypeValues(categoryType: string): string[] {
    return Array.from(this.categoriesPivot.get(categoryType).keys()).sort();
  }

  onSearchClick() {
    this.router.navigate(['/recipes']);
  }

  search(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    this._filterService.announceSearch(searchTerm);
   }


}
