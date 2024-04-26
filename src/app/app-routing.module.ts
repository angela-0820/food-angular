import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageFoodComponent } from './page-food/page-food.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchItem', component:HomeComponent},
  {path: 'food/:id', component:PageFoodComponent},
  {path:'**', component:NotFoundComponent}, // ** any URL
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

