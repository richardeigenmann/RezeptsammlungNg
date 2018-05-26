import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { IRecipe } from '../shared/recipe';
import { RecipeService } from '../services/recipe.service';
import { RecipeSiteService } from '../services/recipe-site.service';
// import { map } from 'rxjs/operators';

@Component({
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css'],
    providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class CarouselComponent implements OnInit {

    recipes: Array<IRecipe> = new Array<IRecipe>();
    errorMessage: string = '';


    constructor(
        private _recipeService: RecipeService,
        private _recipeSiteService: RecipeSiteService,
        config: NgbCarouselConfig
    ) {
        // customize default values of carousels used by this component tree
        config.interval = 900;
        config.wrap = true;
        config.keyboard = true;
    }

    ngOnInit(): void {
        this._recipeService.getRecipes()
            .subscribe(subscribedRecipes => {
                subscribedRecipes.forEach(function (recipe) {
                    this.recipes.push(recipe);
                    this.shuffleArray(this.recipes);
                }, this);
            },
                error => this.errorMessage = <any>error
            );
    }

    public getRecipeImageUrl(recipe: IRecipe) {
        return this._recipeSiteService.getRecipeSite() + '/' + recipe.imageFilename;
    }

    public recipeClick(recipe: IRecipe) {
        console.log('Recipe Clicked: ', recipe);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
        }
    }
}
