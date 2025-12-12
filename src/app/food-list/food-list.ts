import { Component } from '@angular/core';
import { FoodEdit } from './food-edit/food-edit';

@Component({
  selector: 'app-food-list',
  imports: [FoodEdit],
  templateUrl: './food-list.html',
  styleUrl: './food-list.css',
})
export class FoodList {

}
