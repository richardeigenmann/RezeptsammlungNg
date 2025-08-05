import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { IRecipe } from '../shared/recipe';
import { RecipeService } from '../services/recipe.service';
import { RecipeSiteService } from '../services/recipe-site.service';
import { RouteConfigLoadEnd } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'pm-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css'],
    providers: [NgbCarouselConfig],
    imports: [NgIf, NgbCarousel, NgbSlide, NgFor]
})
export class CarouselComponent implements OnInit {

    recipes: IRecipe[] = new Array<IRecipe>();
    errorMessage = '';

    constructor(
        private _recipeService: RecipeService,
        private _recipeSiteService: RecipeSiteService,
        config: NgbCarouselConfig

    ) {
        // customize default values of carousels used by this component tree
        config.interval = 2500;
        config.wrap = true;
        config.keyboard = true;
        config.pauseOnFocus = true;
        config.pauseOnHover = true;
        config.showNavigationArrows = true;
        config.showNavigationIndicators = false;
    }

    ngOnInit(): void {
        this._recipeService.getRecipes()
            .subscribe({
                next: (subscribedRecipes) => {
                    subscribedRecipes.forEach(function (recipe) {
                        this.recipes.push(recipe);
                        this.shuffleArray(this.recipes);
                    });
                },
                error: (error) => this.errorMessage = error as any
            });
    }

    public getRecipeImageUrl(recipe: IRecipe) {
        return this._recipeSiteService.getRecipeSite() + '/' + recipe.imageFilename;
    }

    public recipeClick(recipe: IRecipe) {
        const recipeUrl: string = this._recipeSiteService.getRecipeSite() + '/' + recipe.filename;
        window.open(recipeUrl);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];  
        }
    }
}
