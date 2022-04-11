import { ProductsService } from 'src/app/services/products.service';
import { Component} from '@angular/core';
import ProductModel from 'src/app/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent{


 // Two-Way binding must be into an empty existing object:
  product = new ProductModel()
  constructor(private productsService:  ProductsService, private router: Router) { }

async add() {
try {
  console.log('product after hit submit', this.product)
  const addedProduct = await this.productsService.addProduct(this.product)
  alert("Product has been added with id:" + addedProduct.id)
   this.router.navigateByUrl('/products')
} catch (err: any) {
  alert(err.message)
}
}

}
