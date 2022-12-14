import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe  } from './recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();
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
  constructor(private shoppingListService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice(); // return copy of array NOT reference
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}