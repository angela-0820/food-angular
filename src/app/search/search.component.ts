import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchItem = "";
  constructor(private router:ActivatedRoute, private r:Router){
   
  }
 ngOnInit():void{
 this.router.params.subscribe(params =>{
   if(params['searchItem'])
    this.searchItem = params['searchItem'];

  }
);
 }
 search():void{
  if(this.searchItem)
    this.r.navigateByUrl("search/"+this.searchItem);
 }
}
