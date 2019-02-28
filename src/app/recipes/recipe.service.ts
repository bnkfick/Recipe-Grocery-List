import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Pork Chop', 'Simply Pork Chops', 
        'https://images.unsplash.com/photo-1544009717-1c2561ae1439?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1609&q=80'),
        new Recipe('Chocolate Chip Cookies', 'Best Chocolate Chip Cookies', 
        'https://images.unsplash.com/photo-1530751127259-074b0cdc0469?ixlib=rb-1.2.1&auto=format&fit=crop&w=1601&q=80')
      ];

      getRecipes() {
          //return a copy of the recipes array 
          // rather than the original
          return this.recipes.slice();
      }
}