import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe  } from './recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('Cucumber Sandwich',`2 ounces cream cheese, at room temperature
                                    1 tablespoon low-fat plain Greek yogurt
                                    1 tablespoon sliced fresh chives
                                    1 tablespoon chopped fresh dill`, 'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg',
                                    [
                                      new Ingredient('Cheese', 2),
                                      new Ingredient('Yogurt', 1),
                                      new Ingredient('Chives', 2)
                                    ]),
    new Recipe('Caitlin Bensel', `1 cup all-purpose flour
                    2 eggs
                    ½ cup milk
                    ½ cup water
                    ¼ teaspoon salt`, 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F22%2F16383-basic-crepes-mfs_003.jpg',
                    [
                      new Ingredient('Flour', 1),
                      new Ingredient('Eggs', 2),
                      new Ingredient('Milk', 1)
                    ])
  ];
  constructor() { }

  getRecipes() {
    return this.recipes.slice(); // return copy of array NOT reference
  }
  
}
