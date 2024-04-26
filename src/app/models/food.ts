export class Food{
    name:String;
    price:Number;
    favorite:boolean;
    origins:String[];
    cookTime:String;
    ingredients: Number;
    Stars:number = 0;
    imgUrl:String;
    id: Number;



    constructor(name:String, price:Number, favorite:boolean,
        origins:String[], cookTime:String, ingredients:Number, Stars:number, imgUrl:String, id:Number){
        this.name = name;
        this.price = price;
        this.favorite = favorite;
        this.origins = origins;
        this.cookTime = cookTime;
        this.ingredients = ingredients;
        this.Stars = Stars;
        this.imgUrl = imgUrl;
        this.id = id;
        }
    
    
}