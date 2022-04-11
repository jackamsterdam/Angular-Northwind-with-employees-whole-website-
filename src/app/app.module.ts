import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { HomeComponent } from './components/home-area/home/home.component';
import {FormsModule} from '@angular/forms';
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
import {HttpClientModule} from '@angular/common/http';
import { VatCalculatorComponent } from './components/calculateArea/vat-calculator/vat-calculator.component';
import { EmployeeListComponent } from './components/employee-area/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/employee-area/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-area/employee-details/employee-details.component';

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
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
