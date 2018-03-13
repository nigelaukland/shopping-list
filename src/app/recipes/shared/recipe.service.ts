import { Recipe } from './recipe.model';

export class RecipeService {

  private recipeElements = [
    new Recipe('Kids meatballs', 'Baby led weaning meatballs', './assets/profile.png'),
    new Recipe('Stir fry chicken', `Nige's crispy-ish chicken stirfry`, './../assets/profile.png')
  ];

  getRecipes() {
    return this.recipeElements.slice();
  }


  onRecipeAdded(recipeData: Recipe) {
    this.recipeElements.push(recipeData);
  }
}