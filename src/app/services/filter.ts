import { Injectable, } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  // Observable string sources
  private announcedSearch = new Subject<string>();

  // Observable string streams
  announcedSearch$ = this.announcedSearch.asObservable();

  // Service message commands
  announceSearch(search: string) {
    this.announcedSearch.next(search);
  }

}
