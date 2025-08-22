import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { IRecipe } from '../shared/recipe';
import { RecipeFetchService } from '../services/recipeFetchService';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeSiteService } from '../services/recipe-site';
import { FilterService } from '../services/filter';
import { Tdrecipe } from './tdrecipe/tdrecipe';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    templateUrl: './recipe-list.html',
    styleUrls: [],
    imports: [Tdrecipe]
})

export class RecipeList implements OnInit, OnDestroy {
    private _recipeFetchService = inject(RecipeFetchService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _recipeSiteService = inject(RecipeSiteService);
    private _filterService = inject(FilterService);
    private destroy$ = new Subject<void>();

    errorMessage = '';

    filteredRecipes: IRecipe[];
    recipes: IRecipe[] = [];
    private categoryFilteredRecipes: IRecipe[] = [];

    constructor() {
        // Subscriptions are now managed in ngOnInit to ensure proper lifecycle handling
        // and to fix initialization order bugs.
    }

    ngOnInit(): void {
        this._filterService.announcedSearch$
            .pipe(takeUntil(this.destroy$))
            .subscribe(searchTerm => {
                this.filteredRecipes = searchTerm ? this.performFilter(searchTerm) : this.categoryFilteredRecipes;
            });

        this._recipeFetchService.getRecipes()
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (subscribedRecipes: IRecipe[]) => {
                    subscribedRecipes.forEach((element) => {
                        element.imageFilename = this._recipeSiteService.getRecipeSite() + '/' + element.imageFilename;
                        element.filename = this._recipeSiteService.getRecipeSite() + '/' + element.filename;
                    });

                    this.recipes = subscribedRecipes;
                    const categoryType = this._route.snapshot.paramMap.get('categorytype');
                    const categoryValue = this._route.snapshot.paramMap.get('categoryvalue');

                    if (categoryType && categoryValue) {
                        this.categoryFilteredRecipes = this.recipes.filter((recipe: IRecipe) =>
                            recipe.categories[categoryType] && recipe.categories[categoryType].includes(categoryValue));
                    } else {
                        this.categoryFilteredRecipes = this.recipes;
                    }
                    this.filteredRecipes = this.categoryFilteredRecipes;
                },
                error: (error: unknown) => {
                    this.errorMessage = `Failed to load recipes. ${error instanceof Error ? error.message : String(error)}`;
                }
            });
    }

    performFilter(filterBy: string): IRecipe[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.categoryFilteredRecipes.filter((recipe: IRecipe) =>
            recipe.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message: string): void {
        console.log('Product List: ' + message);
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
