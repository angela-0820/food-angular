import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Food } from '../models/food';

@Component({
  selector: 'app-page-food',
  templateUrl: './page-food.component.html',
  styleUrl: './page-food.component.css'
})
export class PageFoodComponent implements OnInit {
  food!: Food;
  constructor(private route:ActivatedRoute, private foodService:FoodService){
    route.params.subscribe(params =>{
      if(params['id'])
        this.food = foodService.getFoodById(params['id']);
    });
  }
 ngOnInit(): void{
  
 }
}
