export class Recipe {
    public recipeName: string;
    public recipeDescription: string;
    public recipeImagePath: string;
  
    constructor(recipeName: string, recipeDescription: string, recipeImagePath: string) {
      this.recipeName = recipeName;
      this.recipeDescription = recipeDescription;
      this.recipeImagePath = recipeImagePath;
    }
  }