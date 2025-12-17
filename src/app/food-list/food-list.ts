import { Component } from '@angular/core';
import { FoodEdit } from './food-edit/food-edit';
import {Food} from '../shared/food.model'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-list',
  imports: [FoodEdit, CommonModule],
  templateUrl: './food-list.html',
  styleUrl: './food-list.css',
})
export class FoodList {

  foodList: Food[] = [
    new Food('Carne', 1),
    new Food('Arroz', 2),
    new Food('Farofa', 3)
  ];

}
