import { Component, OnInit } from '@angular/core';
import ProductModel from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: ProductModel[];
  constructor(private productsSerivce: ProductsService) {}

  async ngOnInit() {
    try {
      
      this.products = await this.productsSerivce.getAllProducts();
    } catch (err: any) {
      alert(err.message)
    }
  }
}
