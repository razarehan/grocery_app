import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipesChangeSub!: Subscription;
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService, 
              private route: ActivatedRoute,
              private router: Router) { }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.recipesChangeSub = this.recipeService.recipesChanged
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      })
  }

  ngOnDestroy(): void {
    this.recipesChangeSub.unsubscribe();
  }
}
