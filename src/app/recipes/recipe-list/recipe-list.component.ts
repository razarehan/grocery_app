import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];
  // recipes: Recipe[] = [
  //   new Recipe('Cucumber Sandwich',`2 ounces cream cheese, at room temperature
  //                                   1 tablespoon low-fat plain Greek yogurt
  //                                   1 tablespoon sliced fresh chives
  //                                   1 tablespoon chopped fresh dill`, 'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg'),
  //   new Recipe('Caitlin Bensel', `1 cup all-purpose flour
  //                   2 eggs
  //                   ½ cup milk
  //                   ½ cup water
  //                   ¼ teaspoon salt`, 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F22%2F16383-basic-crepes-mfs_003.jpg')
  // ];
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }
}
