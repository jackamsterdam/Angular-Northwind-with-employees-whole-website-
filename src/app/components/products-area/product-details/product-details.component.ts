import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ProductModel from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productImagesUrl = environment.productImagesUrl
  product: ProductModel
  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    try {
      const id = this.activatedRoute.snapshot.params['id']
   this.product = await this.productsService.getOneProduct(id)
    } catch (err:any) {
      alert(err.message)
    }
    

   

  }

}
