import { NotifyService } from 'src/app/services/notify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ProductModel from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productImagesUrl = environment.productImagesUrl;
  product: ProductModel;
  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private notifyService: NotifyService
  ) {}

  async ngOnInit() {
    try {
      const id = +this.activatedRoute.snapshot.params['id'];
      this.product = await this.productsService.getOneProduct(id);
    } catch (err: any) {
      this.notifyService.error(err);
    }
  }

  async deleteProduct() {
    try {
      const ok = confirm('האם אתה בטוח?');
      if (!ok) return;

      await this.productsService.deleteProduct(this.product.id);
      this.notifyService.success('המוצר נמחק בהצלחה');
      this.router.navigateByUrl('/products');
    } catch (err: any) {
      this.notifyService.error(err);
    }
  }
}
