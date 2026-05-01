import { Component, inject, ChangeDetectionStrategy, computed } from '@angular/core';
import { RecipeFetchService } from '../services/recipeFetchService';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '../services/filter';
import { Tdrecipe } from './tdrecipe/tdrecipe';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    templateUrl: './recipeList.html',
    styleUrls: [],
    imports: [Tdrecipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeList {
    private _recipeFetchService = inject(RecipeFetchService);
    private _route = inject(ActivatedRoute);
    private _filterService = inject(FilterService);

    // Data Source Signals
    readonly recipes = this._recipeFetchService.getRecipes();

    readonly searchTerm = this._filterService.announcedSearchRO;
    readonly params = toSignal(this._route.params);

    // Reactive Derived State
    private readonly categoryFilteredRecipes = computed(() => {
        const recipes = this.recipes() || [];
        const params = this.params();
        const type = params?.['categorytype'];
        const value = params?.['categoryvalue'];

        if (!type || !value) return recipes;

        return recipes.filter(recipe => {
            // Data from HttpClient is a plain object at runtime, even if typed as Map.
            // We use a safe access check to handle both cases.
            const categories = recipe.categories as any;
            const catValues = (typeof categories?.get === 'function')
                ? categories.get(type)
                : categories?.[type];

            return Array.isArray(catValues) && catValues.includes(value);
        });
    });

    readonly filteredRecipes = computed(() => {
        const term = (this.searchTerm() ?? '').toLocaleLowerCase();
        const baseList = this.categoryFilteredRecipes();

        if (!term) return baseList;

        return baseList.filter(recipe =>
            recipe.name.toLocaleLowerCase().includes(term)
        );
    });

    onRatingClicked(message: string): void {
        console.log('Product List: ' + message);
    }
}
