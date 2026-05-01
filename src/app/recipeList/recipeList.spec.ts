import { provideZonelessChangeDetection, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeList } from './recipeList';
import { RecipeFetchService } from '../services/recipeFetchService';
import { ActivatedRoute, Params } from '@angular/router';
import { FilterService } from '../services/filter';
import { IRecipe } from '../shared/recipe';
import { Subject } from 'rxjs';
import { Tdrecipe } from './tdrecipe/tdrecipe';

describe('RecipeList', () => {
  let component: RecipeList;
  let fixture: ComponentFixture<RecipeList>;
  let mockRecipeFetchService: jasmine.SpyObj<RecipeFetchService>;
  let mockActivatedRoute: { params: Subject<Params> };
  let mockFilterService: { announcedSearchRO: any };

  const MOCK_RECIPES: IRecipe[] = [
    {
      name: 'Spaghetti Carbonara',
      filename: 'spaghetti.html',
      imageFilename: 'spaghetti.jpg',
      width: '100',
      height: '100',
      stars: '5',
      categories: new Map([['Type', ['Pasta']], ['Cuisine', ['Italian']]])
    },
    {
      name: 'Chicken Curry',
      filename: 'curry.html',
      imageFilename: 'curry.jpg',
      width: '100',
      height: '100',
      stars: '4',
      categories: new Map([['Type', ['Main Course']], ['Cuisine', ['Indian']]])
    },
    {
      name: 'Tomato Soup',
      filename: 'soup.html',
      imageFilename: 'soup.jpg',
      width: '100',
      height: '100',
      stars: '3',
      categories: new Map([['Type', ['Soup']], ['Cuisine', ['Vegetarian']]])
    }
  ];

  beforeEach(async () => {
    mockRecipeFetchService = jasmine.createSpyObj('RecipeFetchService', ['getRecipes']);
    mockActivatedRoute = { params: new Subject<Params>() };
    mockFilterService = { announcedSearchRO: signal('') };

    // Default mock behavior
    mockRecipeFetchService.getRecipes.and.returnValue(signal(MOCK_RECIPES));

    await TestBed.configureTestingModule({
      imports: [RecipeList, Tdrecipe], // Ensure Tdrecipe is imported as it's used in the template
      providers: [
        provideZonelessChangeDetection(),
        { provide: RecipeFetchService, useValue: mockRecipeFetchService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: FilterService, useValue: mockFilterService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeList);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Initial change detection to trigger signal subscriptions
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load recipes on init', () => {
    // Ensure getRecipes was called
    expect(mockRecipeFetchService.getRecipes).toHaveBeenCalled();

    // Check that recipes signal is populated
    expect(component.recipes()).toEqual(MOCK_RECIPES);
    expect(component.filteredRecipes()).toEqual(MOCK_RECIPES);
  });

  it('should filter recipes by search term', () => {
    expect(component.filteredRecipes().length).toBe(3);

    mockFilterService.announcedSearchRO.set('spaghetti');
    fixture.detectChanges();

    expect(component.filteredRecipes().length).toBe(1);
    expect(component.filteredRecipes()[0].name).toBe('Spaghetti Carbonara');

    mockFilterService.announcedSearchRO.set('soup');
    fixture.detectChanges();

    expect(component.filteredRecipes().length).toBe(1);
    expect(component.filteredRecipes()[0].name).toBe('Tomato Soup');

    mockFilterService.announcedSearchRO.set('');
    fixture.detectChanges();

    expect(component.filteredRecipes().length).toBe(3);
  });

  it('should filter recipes by category from route params', () => {
    expect(component.filteredRecipes().length).toBe(3);

    mockActivatedRoute.params.next({ categorytype: 'Cuisine', categoryvalue: 'Italian' });
    fixture.detectChanges();

    expect(component.filteredRecipes().length).toBe(1);
    expect(component.filteredRecipes()[0].name).toBe('Spaghetti Carbonara');

    mockActivatedRoute.params.next({ categorytype: 'Type', categoryvalue: 'Soup' });
    fixture.detectChanges();

    expect(component.filteredRecipes().length).toBe(1);
    expect(component.filteredRecipes()[0].name).toBe('Tomato Soup');

    mockActivatedRoute.params.next({}); // No category filter
    fixture.detectChanges();

    expect(component.filteredRecipes().length).toBe(3);
  });

  it('should filter recipes when categories are plain objects', () => {
    const plainRecipes: Partial<IRecipe>[] = [
      {
        name: 'Plain Pizza',
        categories: { 'Type': ['Pizza'], 'Cuisine': ['Italian'] } as any
      }
    ];
    mockRecipeFetchService.getRecipes.and.returnValue(signal(plainRecipes as IRecipe[]));

    fixture = TestBed.createComponent(RecipeList);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockActivatedRoute.params.next({ categorytype: 'Type', categoryvalue: 'Pizza' });
    fixture.detectChanges();

    expect(component.filteredRecipes().length).toBe(1);
    expect(component.filteredRecipes()[0].name).toBe('Plain Pizza');
  });

  it('should handle null search term', () => {
    mockFilterService.announcedSearchRO.set(null);
    fixture.detectChanges();
    expect(component.filteredRecipes().length).toBe(3);
  });

  it('should call onRatingClicked and log a message', () => {
    spyOn(console, 'log');
    component.onRatingClicked('Test Message');
    expect(console.log).toHaveBeenCalledWith('Product List: Test Message');
  });
});

