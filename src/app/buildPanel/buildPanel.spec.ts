import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { BuildPanelComponent } from './buildPanel';
import { provideHttpClient, withXhr } from '@angular/common/http';
import { RecipeSiteService } from '../services/recipe-site';
import { RecipeFetchService } from '../services/recipeFetchService';
import { IRecipe } from '../shared/recipe';

describe('BuildPanelComponent', () => {
    let component: BuildPanelComponent;
    let fixture: ComponentFixture<BuildPanelComponent>;
    let mockRecipeSiteService: { getRecipesUrl: ReturnType<typeof vi.fn>; getRecipeSite: ReturnType<typeof vi.fn> };
    let mockRecipeFetchService: { getRecipes: ReturnType<typeof vi.fn> };

    beforeEach(async () => {
        mockRecipeSiteService = {
            getRecipeSite: vi.fn().mockName("RecipeSiteService.getRecipeSite"),
            getRecipesUrl: vi.fn().mockName("RecipeSiteService.getRecipesUrl")
        };
        mockRecipeFetchService = {
            getRecipes: vi.fn().mockName("RecipeFetchService.getRecipes")
        };

        // Default mock behavior
        mockRecipeSiteService.getRecipesUrl.mockReturnValue('https://richardeigenmann.github.io/Rezeptsammlung/recipesutf8.json');
        mockRecipeSiteService.getRecipeSite.mockReturnValue('https://site.com');

        await TestBed.configureTestingModule({
            imports: [BuildPanelComponent],
            providers: [
                provideZonelessChangeDetection(),
                { provide: RecipeSiteService, useValue: mockRecipeSiteService },
                { provide: RecipeFetchService, useValue: mockRecipeFetchService },
                provideHttpClient(withXhr())
            ]
        }).compileComponents();
    });

    // Helper to initialize the component AFTER mocks are configured for specific tests
    function setupComponent() {
        fixture = TestBed.createComponent(BuildPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }

    it('should create the component', () => {
        mockRecipeFetchService.getRecipes.mockReturnValue(signal([]));
        setupComponent();
        expect(component).toBeDefined();
    });

    it('should have an Angular version greater than 20.0.0', () => {
        mockRecipeFetchService.getRecipes.mockReturnValue(signal([]));
        setupComponent();
        const parts = component.angularVersion.split('.');
        const major = parseInt(parts[0], 10);

        expect(major).toBeGreaterThanOrEqual(20);
    });

    it('should have the correct github.io url', () => {
        mockRecipeFetchService.getRecipes.mockReturnValue(signal([]));
        setupComponent();
        expect(component.recipesUrl).toBe('https://richardeigenmann.github.io/Rezeptsammlung/recipesutf8.json');
    });

    it('should successfully populate recipes from the service signal', () => {
        const mockRecipes: IRecipe[] = [{
                name: 'Spaghetti',
                filename: 'spaghetti.html',
                imageFilename: 'spaghetti.jpg',
                width: '100',
                height: '100',
                stars: '5',
                categories: new Map([['Italian Favorites', ['Pasta']]])
            }];
        mockRecipeFetchService.getRecipes.mockReturnValue(signal(mockRecipes));

        setupComponent();

        expect(component.recipes()).toEqual(mockRecipes);
    });
});
