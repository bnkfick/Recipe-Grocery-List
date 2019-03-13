import { EventEmitter } from '@angular/core';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
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
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
      addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        //   //downside is emitting lots of events
        // }
        this.ingredients.push(...ingredients); //use the spread operator and emit a single event
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
}