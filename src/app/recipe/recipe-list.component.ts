import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../shared/recipe';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeSiteService } from '../services/recipe-site.service';
import { FilterService } from '../services/filter.service';
import { TdrecipeComponent } from './tdrecipe/tdrecipe.component';

@Component({
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent
    implements OnInit {
    errorMessage: string = '';

    filtereRecipes: IRecipe[];
    recipes: IRecipe[] = [];

    constructor(
        private _recipeService: RecipeService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _recipeSiteService: RecipeSiteService,
        private _filterService: FilterService) {
        console.log(this._route.snapshot.paramMap.get('categorytype'));
        console.log(this._route.snapshot.paramMap.get('categoryvalue'));
        _filterService.announcedSearch$.subscribe(
            searchTerm => {
                this.filtereRecipes = searchTerm ? this.performFilter(searchTerm) : this.recipes;
            });
    }

    filterFn(element, index, array): boolean {
        return true;
    }

    ngOnInit(): void {
        this._recipeService.getRecipes()
            .subscribe({
                next: (subscribedRecipes: IRecipe[]) => {
                    subscribedRecipes.forEach((element) => {
                        element.imageFilename = this._recipeSiteService.getRecipeSite() + '/' + element.imageFilename;
                        element.filename = this._recipeSiteService.getRecipeSite() + '/' + element.filename;
                    });
                    this.recipes = subscribedRecipes;
                    const categoryType = this._route.snapshot.paramMap.get('categorytype');
                    const categoryValue = this._route.snapshot.paramMap.get('categoryvalue');
                    this.filtereRecipes = this.recipes.filter((recipe: IRecipe) =>
                        recipe.categories[categoryType] && recipe.categories[categoryType].includes(categoryValue));
                },
                error: (error) =>

                    this.errorMessage = <any>error,
            });
    }

    performFilter(filterBy: string): IRecipe[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.recipes.filter((recipe: IRecipe) =>
            recipe.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message: string): void {
        console.log('Product List: ' + message);
    }

}
