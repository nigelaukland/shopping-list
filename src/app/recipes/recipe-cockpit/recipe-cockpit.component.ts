import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { RecipeService } from './../shared/recipe.service';
import { Recipe } from '../shared/recipe.model';
@Component({
  selector: 'app-recipe-cockpit',
  templateUrl: './recipe-cockpit.component.html',
  styleUrls: ['./recipe-cockpit.component.css']
})

export class RecipeCockpitComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipe = { recipeName: '', recipeDescription: '', recipeImagePath: ''};
  }

  onAddRecipe() {
    this.recipeService.onRecipeAdded(this.recipe);
  };

  onClearRecipe() {
    this.recipe = { recipeName: '', recipeDescription: '', recipeImagePath: ''};
  };
}
