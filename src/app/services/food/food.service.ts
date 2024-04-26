import { Injectable } from '@angular/core';
import { Food } from '../../models/food';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  getFoodById(id: number): Food {

    return this.getAll().find((food) => food.id==id)!;
  }

  constructor() { }
  getAll():Food[]{
    return[
      {
        name: "Pizza vegetables",
        price: 6,
        favorite: true,
        origins: ['Napoli', 'Italy'],
        ingredients: 12,
        Stars: 5,
        imgUrl: '/assets/images/foods/2.jpg',
        id: 1,
        cookTime: '5-10',
       
      },
      {
        name: "Spaghetti",
        price: 5,
        favorite: true,
        origins: ['Sicily', 'Italy'],
        cookTime: '10-12',
        ingredients: 7,
        Stars: 8,
        imgUrl: '/assets/images/foods/1.jpg',
        id: 2,
        
      },
        {
          name: "Caesar Salad",
          price: 4,
          favorite: true,
          origins: ['Tijuana', 'Mexico'],
          cookTime: '10-12',
          ingredients: 12,
          Stars: 3,
          imgUrl: '/assets/images/foods/Caesar-Salad-24-480x270.jpg',
          id: 3,
          
        },
          {
            name: "Tomato Soup",
            price: 3,
            favorite: false,
            origins: ['Spain'],
            cookTime: '20-25',
            ingredients: 5,
            Stars: 3,
            imgUrl: '/assets/images/foods/4.jpg',
            id: 4,
            
          },
            {
              name: "Tiramisu",
              price: 7,
              favorite: true,
              origins: ['Veneto', 'Italy'],
              cookTime: '30-40',
              ingredients: 8,
              Stars: 2.3,
              imgUrl: '/assets/images/foods/5.jpg',
              id: 5,
             
            },
              {
                name: "Red Velvet",
                price: 4,
                favorite: true,
                origins: ['New York', 'America'],
                cookTime: '25-30',
                ingredients: 14,
                Stars: 3.3,
                imgUrl: '/assets/images/foods/6.jpg',
                id: 6,
                
              },
    ];
     
  }

}
