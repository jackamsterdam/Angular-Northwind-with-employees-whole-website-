// import { HttpClientModule } from '@angular/comm';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import ProductModel from '../models/product.model';
import { addproductAction, deleteProductAction, fetchProductsAction, udpateProductAction } from '../Redux/products-state';
import store from '../Redux/store';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  async getAllProducts():Promise<ProductModel[]>{
    if (store.getState().productsState.products.length === 0) {
      debugger
      const products =  await firstValueFrom(this.http.get<ProductModel[]>(environment.productsUrl)) 
      store.dispatch(fetchProductsAction(products)) 
    console.log(store.getState().productsState.products);
    
    }

    return store.getState().productsState.products
          
  }

  async getOneProduct(id: number):Promise<ProductModel>{
    let product = store.getState().productsState.products.find(p => p.id === id)
    if (!product) {

       product =  await firstValueFrom(this.http.get<ProductModel>(environment.productsUrl + id))
    }
      return product 
  }

  async addProduct(product: ProductModel):Promise<ProductModel>{

   const formData = new FormData() 
   formData.append('name', product.name)
   formData.append('price', product.price.toString())
   formData.append('stock', product.stock.toString())
   formData.append('image', product.image)




    const addedProduct = await firstValueFrom(this.http.post<ProductModel>(environment.productsUrl, formData))
    store.dispatch(addproductAction(addedProduct))
    return addedProduct

  }

  async updateProduct(product: ProductModel):Promise<ProductModel> {
     const formData = new FormData()
     formData.append('id', product.id.toString())
     formData.append('name', product.name)
     formData.append('price', product.price.toString())
     formData.append('stock', product.stock.toString())
     formData.append('image', product.image)


    const updatedProduct = await firstValueFrom(this.http.put<ProductModel>(environment.productsUrl + product.id, formData))
    store.dispatch(udpateProductAction(updatedProduct))
    return updatedProduct
  }


  async deleteProduct(id: number):Promise<void> {
    await firstValueFrom(this.http.delete(environment.productsUrl + id))
    store.dispatch(deleteProductAction(id))
  }
}
