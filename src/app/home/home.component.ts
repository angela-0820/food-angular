import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods:Food[]=[];
rating: any;
constructor(private foodServices:FoodService, private router:ActivatedRoute){}
ngOnInit():void{
  this.router.params.subscribe(params => {
    if(params['searchItem'])
      this.foods = this.foodServices.getAll().filter(
    food => food.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase())
  )
  else
  this.foods = this.foodServices.getAll();
  }
  
  );
  console.log(this.foods);
}
}