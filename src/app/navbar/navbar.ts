import { Component, OnInit, Signal, computed, inject } from '@angular/core';
import { CategoriesService } from '../services/categories';
import { FilterService } from '../services/filter';
import { Router, RouterLinkActive, RouterLink } from '@angular/router';
import { Navabout } from '../navabout/navabout';
import { EncodeURI } from '../shared/encodeUri';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

// TODO: This should probably use an Angular Template Form or a Reactive Form
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: [],
  imports: [
    RouterLinkActive,
    RouterLink,
    Navabout,
    EncodeURI,
    ReactiveFormsModule,
  ],
  standalone: true,
})
export class Navbar implements OnInit {
  private _categoriesService = inject(CategoriesService);
  private _filterService = inject(FilterService);
  private router = inject(Router);
  searchInput = new FormControl('');

  categoriesPivotSignal = this._categoriesService.categoriesPivotSignalRO;

  public readonly categoryLabels: Signal<string[]> = computed(() => {
    // 1. Call the dependency signal to get its current value (the Map)
    const pivotMap = this.categoriesPivotSignal();

    // 2. Get the keys from the Map and sort them
    //return Array.from(pivotMap.keys()).sort();
    return Array.from(pivotMap.keys());
  });

  ngOnInit() {
    // Subscribe to valueChanges on the FormControl
    this.searchInput.valueChanges
      .pipe(
        debounceTime(100), // wait for 100ms pause in events
        distinctUntilChanged() // only emit if value is different from previous
      )
      .subscribe((searchTerm) => {
        // Announce the search term to the service
        this._filterService.announceSearch(searchTerm);
      });
  }

  getCategoryTypeValues(categoryType: string): string[] {
    //return Array.from(this.categoriesPivot.get(categoryType).keys()).sort();
    const pivotMap = this._categoriesService.categoriesPivotSignalRO();
    // 2. Check if the top-level categoryType exists in the returned Map
    const innerMap = pivotMap.get(categoryType);
    if (innerMap) {
      // 3. If it exists, get the keys (the actual category names) and sort them
      return Array.from(innerMap.keys()).sort();
    } else {
      // 4. Handle the case where the categoryType doesn't exist
      return [];
    }
  }

  onSearchClick() {
    this.router.navigate(['/recipes']);
  }
}
