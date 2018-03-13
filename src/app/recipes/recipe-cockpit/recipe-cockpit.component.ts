import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-cockpit',
  templateUrl: './recipe-cockpit.component.html',
  styleUrls: ['./recipe-cockpit.component.css']
})

export class RecipeCockpitComponent implements OnInit {
  @Output() recipeAdded = new EventEmitter<{recipeName: string, recipeDescription: string, imagePath: string}>(); 
  recipeName = '';
  recipeDescription = '';
  imagePath = '';

  constructor() { }

  ngOnInit() {
  }

  onAddRecipe() {
    this.recipeAdded.emit({recipeName: this.recipeName, recipeDescription: this.recipeDescription, imagePath: this.imagePath});
    this.recipeName = '';
    this.recipeDescription = '';
    this.imagePath = '';
  };

  onClearRecipe() {
    this.recipeName = ''; 
    this.recipeDescription = '';
    this.imagePath = '';
  };
}
