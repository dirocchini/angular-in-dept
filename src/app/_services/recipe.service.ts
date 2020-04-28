import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'our beaultifull desc',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'Another test recipe',
      'Your pretty desc',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
