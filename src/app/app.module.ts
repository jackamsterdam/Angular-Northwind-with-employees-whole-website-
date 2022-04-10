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
import { DisplayImagesComponent } from './components/home-area/display-images/display-images.component'

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
