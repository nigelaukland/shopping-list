import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Input() recipeList: Recipe[];

  constructor() { }

  ngOnInit() {
  }

}
