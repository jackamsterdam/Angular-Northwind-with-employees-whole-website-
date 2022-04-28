import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { HomeComponent } from './components/home-area/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DiscountComponent } from './components/home-area/discount/discount.component';
import { SaleComponent } from './components/home-area/sale/sale.component';
import { ShoesComponent } from './components/home-area/shoes/shoes.component';
import { ColorBoxComponent } from './components/home-area/color-box/color-box.component';
import { AnotherSaleComponent } from './components/home-area/another-sale/another-sale.component';
import { ColorPickerComponent } from './components/home-area/color-picker/color-picker.component';
import { DisplayImagesComponent } from './components/home-area/display-images/display-images.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { ProductCardComponent } from './components/products-area/product-card/product-card.component';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { SuccessStoryComponent } from './components/success-stories-area/success-story/success-story.component'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { VatCalculatorComponent } from './components/calculateArea/vat-calculator/vat-calculator.component';
import { EmployeeListComponent } from './components/employee-area/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/employee-area/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-area/employee-details/employee-details.component';
import { UpdateProductComponent } from './components/products-area/update-product/update-product.component';
import { UpdateEmployeeComponent } from './components/employee-area/update-employee/update-employee.component';
import { RandomRangeComponent } from './components/about-area/random-range/random-range.component';
import { AuthMenuComponent } from './components/auth-area/auth-menu/auth-menu.component';
import { RegisterComponent } from './components/auth-area/register/register.component';
import { LoginComponent } from './components/auth-area/login/login.component';
import { LogoutComponent } from './components/auth-area/logout/logout.component';
import { JwtInterceptor } from './services/jwt.interceptor';
import { RegisterTemplateFormComponent } from './components/auth-area/register-template-form/register-template-form.component';
import { LoginTemplateFormComponent } from './components/auth-area/login-template-form/login-template-form.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    DiscountComponent,
    SaleComponent,
    ShoesComponent,
    ColorBoxComponent,
    AnotherSaleComponent,
    ColorPickerComponent,
    DisplayImagesComponent,
    PageNotFoundComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    AddProductComponent,
    AboutComponent,
    SuccessStoryComponent,
    VatCalculatorComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    UpdateProductComponent,
    UpdateEmployeeComponent,
    RandomRangeComponent,
    AuthMenuComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    RegisterTemplateFormComponent,
    LoginTemplateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    useClass: JwtInterceptor,
    provide : HTTP_INTERCEPTORS,
    multi: true
  }],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
