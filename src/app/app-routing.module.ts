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
import { UpdateProductComponent } from './components/products-area/update-product/update-product.component';
import { UpdateEmployeeComponent } from './components/employee-area/update-employee/update-employee.component';
import { RegisterComponent } from './components/auth-area/register/register.component';
import { LoginComponent } from './components/auth-area/login/login.component';
import { LogoutComponent } from './components/auth-area/logout/logout.component';
import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [

{path: 'register', component: RegisterComponent},
{path: 'login', component: LoginComponent},
{path: 'logout', component: LogoutComponent},



  {path: 'home', component: HomeComponent},
  {path:'products', component: ProductListComponent},
  {path:'products/new', component: AddProductComponent, canActivate: [AuthGuard, AdminGuard]},
  {path:'products/details/:id', component: ProductDetailsComponent},

  {path: 'products/edit/:id', component: UpdateProductComponent},

  {path: 'employees', component: EmployeeListComponent },
  {path: 'employees/new', component: AddEmployeeComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'employees/details/:id', component: EmployeeDetailsComponent},
  {path: 'employees/edit/:id', component: UpdateEmployeeComponent},

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
