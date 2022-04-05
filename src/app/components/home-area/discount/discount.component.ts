import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
discount: number = 10
  constructor() { }

  ngOnInit(): void {
  }


  isSunday(): boolean {
    const now = new Date()
    const dayOfWeek = now.getDay() + 1
    return dayOfWeek === 1
  }
}
