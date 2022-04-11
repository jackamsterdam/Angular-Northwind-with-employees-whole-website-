import { MonetaryService } from './../../../services/monetary.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.css']
})
export class VatCalculatorComponent implements OnInit {
// price: number
priceWithoutVat: number
vat: number
  constructor(private monetaryService: MonetaryService) { }

 ngOnInit()  {
    // this.priceWithoutVat = this.monetaryService.getPrice(this.price)
    // console.log("this.priceWithoutVat", this.priceWithoutVat);
  }

  
  calculateVat(amount: string) {
    this.priceWithoutVat = this.monetaryService.getPrice(+amount)
    this.vat = +amount - this.priceWithoutVat 

  }
}

// is there a way to do this with 2 way binding instead of template refernce variable ???