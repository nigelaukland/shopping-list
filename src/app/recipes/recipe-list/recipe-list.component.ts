import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // recipes: Recipe[] = [
  //   new Recipe('Kids meatballs', 'Baby led weaning meatballs', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Meat_balls_in_tomatoes_sauce_%289368881060%29.jpg/320px-Meat_balls_in_tomatoes_sauce_%289368881060%29.jpg'),
  //   new Recipe('Stir fry chicken', `Nige's crispy-ish chicken stirfry`, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--14362_11.jpg' )
  // ];

  constructor() { }

  ngOnInit() {
  }

}
