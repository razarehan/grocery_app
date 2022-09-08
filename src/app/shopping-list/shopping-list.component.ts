import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private igChangeSub!: Subscription;
  // ingredients: Ingredient[] = [
  //   new Ingredient('Mango', 3),
  //   new Ingredient('Orange', 5) 
  // ]; 
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientChanged
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      })
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe(); 
  }
  // onIngredientAdded(ingredient: Ingredient) {
  //   // this.ingredients.push(ingredient );
  // }
}
