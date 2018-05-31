import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../shared/recipe';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeSiteService } from '../services/recipe-site.service';

@Component({
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent
    implements OnInit {
    imageWidth: number = 50;
    imageMargin: number = 2;
    errorMessage: string = '';

    _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filtereRecipes = this.listFilter ? this.performFilter(this.listFilter) : this.recipes;
    }
    filtereRecipes: IRecipe[];
    recipes: IRecipe[] = [];

    constructor(
        private _recipeService: RecipeService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _recipeSiteService: RecipeSiteService) {
        console.log(this._route.snapshot.paramMap.get('categorytype'));
        console.log(this._route.snapshot.paramMap.get('categoryvalue'));
    }

    filterFn(element, index, array): boolean {
        return true;
    }

    ngOnInit(): void {
        this._recipeService.getRecipes()
            .subscribe(
                (subscribedRecipes: IRecipe[]) => {
                    subscribedRecipes.forEach(function (element) {
                        element.imageFilename = this._recipeSiteService.getRecipeSite() + '/' + element.imageFilename;
                        element.filename = this._recipeSiteService.getRecipeSite() + '/' + element.filename;
                    }, this);
                    this.recipes = subscribedRecipes;
                    const categoryType = this._route.snapshot.paramMap.get('categorytype');
                    const categoryValue = this._route.snapshot.paramMap.get('categoryvalue');
                    this.filtereRecipes = this.recipes.filter((recipe: IRecipe) =>
                        recipe.categories[categoryType] && recipe.categories[categoryType].includes(categoryValue));
                },
                error => this.errorMessage = <any>error
            );
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
