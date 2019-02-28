import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Pork Chop', 'Simply Pork Chops', 
        'https://images.unsplash.com/photo-1544009717-1c2561ae1439?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1609&q=80',
        [ new Ingredient('pork chops', 4),
          new Ingredient('butter', 1),
        ]),
        new Recipe('Chocolate Chip Cookies', 'Best Chocolate Chip Cookies', 
        'https://images.unsplash.com/photo-1530751127259-074b0cdc0469?ixlib=rb-1.2.1&auto=format&fit=crop&w=1601&q=80', 
        [ new Ingredient('flour', 4),
          new Ingredient('sugar', 1),
          new Ingredient('chocolate chips', 1),
        ]),
      ];

      getRecipes() {
          //return a copy of the recipes array 
          // rather than the original
          return this.recipes.slice();
      }
}