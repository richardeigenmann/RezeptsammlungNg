import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  // Signal for the search term state
  private _announcedSearch = signal('');

  public readonly announcedSearchRO = this._announcedSearch.asReadonly();

  announceSearch(search: string) {
    this._announcedSearch.set(search);
  }
}
