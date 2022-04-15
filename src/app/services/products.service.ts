// import { HttpClientModule } from '@angular/comm';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import ProductModel from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  async getAllProducts():Promise<ProductModel[]>{
             const products =  await firstValueFrom(this.http.get<ProductModel[]>(environment.productsUrl))  
             return products 
  }

  async getOneProduct(id: number):Promise<ProductModel>{
      const product =  await firstValueFrom(this.http.get<ProductModel>(environment.productsUrl + id))
      return product 
  }

  async addProduct(product: ProductModel):Promise<ProductModel>{

   const formData = new FormData() 
   formData.append('name', product.name)
   formData.append('price', product.price.toString())
   formData.append('stock', product.stock.toString())
   formData.append('image', product.image)




    const addedProduct = firstValueFrom(this.http.post<ProductModel>(environment.productsUrl, formData))
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
    return updatedProduct
  }


  async deleteProduct(id: number):Promise<void> {
    await firstValueFrom(this.http.delete(environment.productsUrl + id))
  }
}
