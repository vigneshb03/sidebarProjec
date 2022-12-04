import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"",redirectTo:"dashboard",pathMatch:"full"},
  {path:"profile",component:MediaComponent},
  {path:"Security",component:ProductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
