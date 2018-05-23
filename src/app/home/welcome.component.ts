import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { RecipeService } from '../products/recipe.service';
import { IRecipe } from '../products/recipe';

@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {

    images: Array<string>;
    errorMessage: string = '';


    constructor(private _http: HttpClient, private _recipeService: RecipeService) { }

    ngOnInit(): void {
        this._http.get('https://picsum.photos/list')
            .pipe(map((images: Array<{ id: number }>) => this._randomImageUrls(images)))
            .subscribe(images => this.images = images);

        this._recipeService.getRecipes()
            .subscribe(
                (subscribedRecipes: IRecipe[]) => {
                    subscribedRecipes.forEach(function (element) {
                        element.imageFilename = 'http://richieigenmann.users.sourceforge.net/' + element.imageFilename;
                        element.filename = 'http://richieigenmann.users.sourceforge.net/' + element.filename;
                    });
                },
                error => this.errorMessage = <any>error
            );
    }

    private _randomImageUrls(images: Array<{ id: number }>): Array<string> {
        return [1, 2, 3].map(() => {
            const randomId = images[Math.floor(Math.random() * images.length)].id;
            return `https://picsum.photos/900/500?image=${randomId}`;
        });
    }

    buttonClick():void {
        console.log(this.images);
    }
}
