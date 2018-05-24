import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../shared/recipe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  public pageTitle: string = 'Product Detail';
  public recipe: IRecipe;

  ngOnInit(): void {
    const id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

  constructor(private _route: ActivatedRoute, private _router: Router) {
    console.log(this._route.snapshot.paramMap.get('id'));
  }

}
