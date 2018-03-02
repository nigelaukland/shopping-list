export class Recipe {
    public recipeName: string;
    public recipeDescription: string;
    public imagePath: string;
  
    constructor(recipeName: string, recipeDescription: string, imagePath: string) {
      this.recipeName = recipeName;
      this.recipeDescription = recipeDescription;
      this.imagePath = imagePath;
    }
  }