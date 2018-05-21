import { Component, OnInit } from '@angular/core';
import { IRecipe } from './recipe';
import { RecipeService } from './recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent
    implements OnInit {
    pageTitle: string = 'Recipe List';
    recipesBaseUrl: string = 'http://richieigenmann.users.sourceforge.net/';
    showImage: boolean = true;
    imageWidth: number = 50;
    imageMargin: number = 2;
    _listFilter: string = '';
    errorMessage: string = '';

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        //console.log("setListFilter");
        this._listFilter = value;
        this.filtereRecipes = this.listFilter ? this.performFilter(this.listFilter) : this.recipes;
    }
    filtereRecipes: IRecipe[];
    recipes: IRecipe[] = [];

    constructor(private _productService: RecipeService, private _route: ActivatedRoute, private _router: Router) {
        console.log(this._route.snapshot.paramMap.get('categorytype'));
        console.log(this._route.snapshot.paramMap.get('categoryvalue'));
    }

    toggleImage(): void { this.showImage = !this.showImage; }

    ngOnInit(): void {
        this._productService.getRecipes()
            .subscribe(
            (subscribedRecipes: IRecipe[]) => {
                subscribedRecipes.forEach(function (element) {
                    element.imageFilename = 'http://richieigenmann.users.sourceforge.net/' + element.imageFilename;
                    element.filename = 'http://richieigenmann.users.sourceforge.net/' + element.filename;
                });
                this.recipes = subscribedRecipes;
                let categoryType = this._route.snapshot.paramMap.get('categorytype');
                let categoryValue = this._route.snapshot.paramMap.get('categoryvalue');
                this.filtereRecipes = this.recipes.filter((recipe: IRecipe) => recipe.categories[categoryType].includes(categoryValue) );
            },
            error => this.errorMessage = <any>error
            );

        //
    }

    performFilter(filterBy: string): IRecipe[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.recipes.filter((recipe: IRecipe) =>
            recipe.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message: string): void {
        console.log('Product List: ' + message);
        this.pageTitle = message;
    };
}