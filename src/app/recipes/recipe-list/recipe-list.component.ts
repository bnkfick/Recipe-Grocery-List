import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pork Chop', 'Test Description', 

    'https://images.unsplash.com/photo-1544009717-1c2561ae1439?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1609&q=80'),
    new Recipe('Chocolate Chip Cookies', 'Test Description', 
    'https://images.unsplash.com/photo-1530751127259-074b0cdc0469?ixlib=rb-1.2.1&auto=format&fit=crop&w=1601&q=80')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
