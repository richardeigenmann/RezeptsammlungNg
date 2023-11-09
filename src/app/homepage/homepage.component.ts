import { Component, OnInit } from '@angular/core';
import { SimpleRecipeListComponent } from '../simple-recipe-list/simple-recipe-list.component';

@Component({
  selector: 'pm-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
