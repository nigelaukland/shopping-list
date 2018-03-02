import { Component } from '@angular/core';
import { Recipe } from './recipes/shared/recipe.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  
  recipeElements = [
    new Recipe('Kids meatballs', 'Baby led weaning meatballs', './assets/profile.png'),
    new Recipe('Stir fry chicken', `Nige's crispy-ish chicken stirfry`, './../assets/profile.png')
  ]

  onRecipeAdded(recipeData: Recipe) {
    this.recipeElements.push(recipeData);
    
  }

}
