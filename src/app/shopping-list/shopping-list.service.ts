import { EventEmitter } from '@angular/core';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

    private ingredients: Ingredient[] = [
        new Ingredient('Chicken Breasts', 4),
        new Ingredient('Potatoes', 4),
      ]

      getIngredients() {
          //return a copy of the recipes array 
          // rather than the original
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
      }
}