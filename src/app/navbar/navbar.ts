import { Component, OnInit, inject } from '@angular/core';
import { CategoriesService } from '../services/categories';
import { FilterService } from '../services/filter';
import { Router, RouterLinkActive, RouterLink } from '@angular/router';
import { Menuabout } from '../menuabout/menuabout';
import { EncodeURI } from '../shared/encodeUri';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'; 

// TODO: This should probably use an Angular Template Form or a Reactive Form
@Component({
    selector: 'pm-navbar',
    templateUrl: './navbar.html',
    styleUrls: [],
    imports: [RouterLinkActive, RouterLink, Menuabout, EncodeURI, ReactiveFormsModule],
    standalone: true,
})

export class Navbar implements OnInit {
  private _categoriesService = inject(CategoriesService);
  private _filterService = inject(FilterService);
  private router = inject(Router);
  searchInput= new FormControl('');


  categoriesPivot = new Map<string, Map<string, number>>();
  bindedCategoriesPivotKeys: string[];

  ngOnInit() {
    this._categoriesService.getCategories()
      .subscribe( (categories: Map<string, Map<string, number>>) => {
        this.categoriesPivot = categories;
        this.bindedCategoriesPivotKeys = Array.from(this.categoriesPivot.keys());
      } );

    // Subscribe to valueChanges on the FormControl
    this.searchInput.valueChanges.pipe(
      debounceTime(100), // wait for 100ms pause in events
      distinctUntilChanged() // only emit if value is different from previous
    ).subscribe(searchTerm => {
      // Announce the search term to the service
      this._filterService.announceSearch(searchTerm);
    });
  }

  getCategoryTypeValues(categoryType: string): string[] {
    return Array.from(this.categoriesPivot.get(categoryType).keys()).sort();
  }

  onSearchClick() {
    this.router.navigate(['/recipes']);
  }

}
