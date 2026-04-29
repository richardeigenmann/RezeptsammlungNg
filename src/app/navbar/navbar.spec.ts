import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { Navbar } from './navbar';
import { CategoriesService } from '../services/categories';
import { FilterService } from '../services/filter';
import { signal } from '@angular/core';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;
  let mockCategoriesService: jasmine.SpyObj<CategoriesService>;
  let mockFilterService: jasmine.SpyObj<FilterService>;

  beforeEach(async () => {
    mockFilterService = jasmine.createSpyObj('FilterService', ['announceSearch']);
    // Experts mock signals by providing a real signal in the mock object
    mockCategoriesService = jasmine.createSpyObj('CategoriesService', [], {
      categoriesPivotSignalRO: signal(new Map<string, Map<string, string[]>>([
        ['Type', new Map([['Pasta', []]])]
      ]))
    });

    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [
        provideRouter([]),
        { provide: CategoriesService, useValue: mockCategoriesService },
        { provide: FilterService, useValue: mockFilterService }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute categoryLabels from the service signal', () => {
    // The signal was initialized with 'Type' in beforeEach
    expect(component.categoryLabels()).toEqual(['Type']);
  });

  it('should announce search term after debounce', fakeAsync(() => {
    const testTerm = 'Spaghetti';
    component.searchInput.setValue(testTerm);

    // Search shouldn't be called immediately due to debounceTime(100)
    expect(mockFilterService.announceSearch).not.toHaveBeenCalled();

    tick(100);

    expect(mockFilterService.announceSearch).toHaveBeenCalledWith(testTerm);
  }));

  it('should not announce if the search term has not changed', fakeAsync(() => {
    component.searchInput.setValue('Pasta');
    tick(100);
    expect(mockFilterService.announceSearch).toHaveBeenCalledTimes(1);

    component.searchInput.setValue('Pasta');
    tick(100);
    // distinctUntilChanged should prevent the second call
    expect(mockFilterService.announceSearch).toHaveBeenCalledTimes(1);
  }));

  describe('getCategoryTypeValues', () => {
    it('should return sorted keys for a valid category type', () => {
      const values = component.getCategoryTypeValues('Type');
      expect(values).toEqual(['Pasta']);
    });

    it('should return empty array for invalid category type', () => {
      expect(component.getCategoryTypeValues('Unknown')).toEqual([]);
    });
  });

  it('should navigate to /recipes when search icon is clicked', () => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    component.onSearchClick();
    expect(router.navigate).toHaveBeenCalledWith(['/recipes']);
  });
});
