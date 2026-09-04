import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TypedRouter } from 'angular-typed-router';
import { Navbar } from './navbar';
import { CategoriesService } from '../services/categories';
import { FilterService } from '../services/filter';
import { provideZonelessChangeDetection, signal, Signal } from '@angular/core';

describe('Navbar', () => {
    let component: Navbar;
    let fixture: ComponentFixture<Navbar>;
    let mockCategoriesService: { categoriesPivotSignalRO: Signal<Map<string, Map<string, number>>> };
    let mockFilterService: { announceSearch: ReturnType<typeof vi.fn> };

    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date()); // Ensure a consistent date/time
    });

    beforeEach(async () => {
        mockFilterService = {
            announceSearch: vi.fn().mockName("FilterService.announceSearch")
        };
        // Experts mock signals by providing a real signal in the mock object
        mockCategoriesService = {
            categoriesPivotSignalRO: signal(new Map<string, Map<string, number>>([
                ['Type', new Map([['Pasta', 1]])]
            ]))
        };

        await TestBed.configureTestingModule({
            imports: [Navbar],
            providers: [
                provideZonelessChangeDetection(),
                provideRouter([]),
                { provide: CategoriesService, useValue: mockCategoriesService },
                { provide: FilterService, useValue: mockFilterService }
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(Navbar);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should compute categoryLabels from the service signal', () => {
        // The signal was initialized with 'Type' in beforeEach
        expect(component.categoryLabels()).toEqual(['Type']);
    });

    it('should announce search term after debounce', () => {
        const testTerm = 'Spaghetti';
        component.searchInput.setValue(testTerm);

        // Search shouldn't be called immediately due to debounceTime(100)
        expect(mockFilterService.announceSearch).not.toHaveBeenCalled();

        vi.advanceTimersByTime(101); // Tick slightly more than 100
        fixture.detectChanges();

        expect(mockFilterService.announceSearch).toHaveBeenCalledWith(testTerm);
    });

    it('should not announce if the search term has not changed', () => {
        component.searchInput.setValue('Pasta');
        vi.advanceTimersByTime(101);
        fixture.detectChanges();
        expect(mockFilterService.announceSearch).toHaveBeenCalledTimes(1);

        component.searchInput.setValue('Pasta');
        vi.advanceTimersByTime(101);
        fixture.detectChanges();
        // distinctUntilChanged should prevent the second call
        expect(mockFilterService.announceSearch).toHaveBeenCalledTimes(1);
    });

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
        const router = TestBed.inject(TypedRouter);
        vi.spyOn(router, 'navigate').mockResolvedValue(true);
        component.onSearchClick();
        expect(router.navigate).toHaveBeenCalledWith(['/', 'recipes']);
    });
});
