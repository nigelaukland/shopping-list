import { Component, OnInit } from '@angular/core';

import { Recipe } from './../shared/recipe.model';
import { RecipeService } from './../shared/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

  recipeList: Recipe[];

  constructor(private recipeService: RecipeService) { 
  }

  ngOnInit() {
    this.recipeList = this.recipeService.getRecipes();
  }

}
