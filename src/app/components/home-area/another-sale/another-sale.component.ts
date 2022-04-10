import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-another-sale',
  templateUrl: './another-sale.component.html',
  styleUrls: ['./another-sale.component.css']
})
export class AnotherSaleComponent implements OnInit {

  @Input() //can i put antyhign in parenthsesis?
item: string
@Input()
price: number
  constructor() { }

  ngOnInit(): void {
  }
 
}
