import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Packages } from './packages/packages';
import { FoodList } from './food-list/food-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,Packages,FoodList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
