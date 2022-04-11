import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about-area/about/about.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { SuccessStoryComponent } from './components/success-stories-area/success-story/success-story.component';
import { VatCalculatorComponent } from './components/calculateArea/vat-calculator/vat-calculator.component';
import { EmployeeListComponent } from './components/employee-area/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/employee-area/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-area/employee-details/employee-details.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'products', component: ProductListComponent},
  {path:'products/new', component: AddProductComponent},
  {path:'products/details/:id', component: ProductDetailsComponent},

  {path: 'employees', component: EmployeeListComponent },
  {path: 'employees/new', component: AddEmployeeComponent},
  {path: 'employees/details/:id', component: EmployeeDetailsComponent},

 {path:'calculate', component: VatCalculatorComponent},

  {path: 'about', component: AboutComponent},
  {path: 'success-stories', component: SuccessStoryComponent},

  // {path: '', component: HomeComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'},


  {path: "**", component: PageNotFoundComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
