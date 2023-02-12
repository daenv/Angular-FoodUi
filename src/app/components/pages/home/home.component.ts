import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/foods/Food';
import { FoodService } from '../../../services/foods/food.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService, Route: ActivatedRoute) {
    Route.params.subscribe(params => {
      let foodObservable: Observable<Food[]>;
      //@ts-ignore
      if (params.searchTerm) {
        //@ts-ignore
        foodObservable = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      }
      //@ts-ignore
      else if (params.tag)
        //@ts-ignore
        foodsObservalbe = this.foodService.getAllFoodsByTag(params.tag);
      //@ts-ignore
      else foodsObservalbe = foodService.getAll();
      //@ts-ignore
      foodsObservalbe.subscribe(serverFoods => {
        this.foods = serverFoods;
      });
    });
  }

  ngOnInit(): void {}
}
