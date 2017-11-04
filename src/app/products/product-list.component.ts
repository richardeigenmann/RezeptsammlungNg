import { Component, OnInit } from '@angular/core';
import { IRecipe } from './recipe';
import { ProductService } from './product.service';
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
        console.log("setListFilter");
        this._listFilter = value;
        this.filtereRecipes = this.listFilter ? this.performFilter(this.listFilter) : this.recipes;
    }
    filtereRecipes: IRecipe[];
    recipes: IRecipe[] = [];

    constructor(private _productService: ProductService, private _route: ActivatedRoute, private _router: Router) {
        console.log(this._route.snapshot.paramMap.get('categorytype'));
        console.log(this._route.snapshot.paramMap.get('categoryvalue'));
    }

    toggleImage(): void { this.showImage = !this.showImage; }

    ngOnInit(): void {
        console.log('In OnInit');
        this._productService.getProducts()
            .subscribe(
            subscribedRecipes => {
                subscribedRecipes.forEach(function (element) {
                    element.imageFilename = 'http://richieigenmann.users.sourceforge.net/' + element.imageFilename;
                    element.filename = 'http://richieigenmann.users.sourceforge.net/' + element.filename;
                });
                this.recipes = subscribedRecipes;
                this.filtereRecipes = this.recipes;
            },
            error => this.errorMessage = <any>error
            );

        //let gaga = this.performCategoryFilter(this._route.snapshot.paramMap.get('categorytype'), this._route.snapshot.paramMap.get('categoryvalue'));
    }

    performFilter(filterBy: string): IRecipe[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.recipes.filter((recipe: IRecipe) =>
            recipe.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    /* performCategoryFilter(categoryType: string, categoryValue: string): IRecipe[] {
         console.log("Performing Category Filter for categoryType: " + categoryType + " categoryValue: " + categoryValue);
         let categoryRecipes = this.products;
         //let categoryRecipes = this.products.filter(product =>
         //    true
         //);
         console.log("categoryRecipes: ", categoryRecipes);
 
         //return this.products.filter((product: IRecipe) =>
         //    true //product.categories.get(categoryType).includes(categoryValue) 
         //);
         //return[];
         return this.products;
     }*/

    onRatingClicked(message: string): void {
        console.log('Product List: ' + message);
        this.pageTitle = message;
    };
}