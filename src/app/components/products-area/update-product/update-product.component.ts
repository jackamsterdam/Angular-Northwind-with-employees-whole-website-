import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ProductModel from 'src/app/models/product.model';
import { NotifyService } from 'src/app/services/notify.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product: ProductModel

  productForm: FormGroup
  nameInput: FormControl
  priceInput: FormControl
  stockInput: FormControl
  imageInput: FormControl

  @ViewChild('imageBox')
  imageBoxRef: ElementRef<HTMLInputElement>

  constructor(private activatedRoute: ActivatedRoute ,private productsService: ProductsService, private notifyService: NotifyService, private router: Router) { }

  async ngOnInit() {
    try {
          const id = +this.activatedRoute.snapshot.params['id']
          this.product = await this.productsService.getOneProduct(id)
//!It works even without Validators ??? 
          this.nameInput = new FormControl(this.product.name, [Validators.required,Validators.minLength(3)])
          this.priceInput = new FormControl(this.product.price, [Validators.required, Validators.min(0), Validators.max(1000)])
          this.stockInput = new FormControl(this.product.stock, [Validators.required, Validators.min(0), Validators.max(10000)])
          this.imageInput = new FormControl()
          this.productForm = new FormGroup({
            nameBox: this.nameInput,
            priceBox: this.priceInput,
            stockBox: this.stockInput, 
            imageBox: this.imageInput
          })
    } catch (err: any) {
      this.notifyService.error(err)
    }

  
  }

  async update() {
    try {
      console.log(this.product) //so this is the product i got from getOneproduct but we want to fill it up with the form values !! 

      this.product.name = this.nameInput.value
      this.product.price = this.priceInput.value
      this.product.stock = this.stockInput.value
      this.product.image = this.imageBoxRef.nativeElement.files[0]
      console.log('product after assigned', this.product)
      //so now we have a product with the old id and updated form values !! 
      await this.productsService.updateProduct(this.product)
      this.notifyService.success('המוצר עודכן בהצלחה')
      this.router.navigateByUrl('/products')


    } catch (err: any) {
      this.notifyService.error(err)
    }
  }







}
