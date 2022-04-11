import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonetaryService {

  // constructor() { }


  //Get a price with Vat and return the price without Vat 
  //so 117 will return 100 and 150 will return 128
 getPrice(priceWithVat: number):number {
     const price = priceWithVat / 1.17
     return price 
}





}
