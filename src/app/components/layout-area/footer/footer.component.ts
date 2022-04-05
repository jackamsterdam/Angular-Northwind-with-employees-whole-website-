import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  month: string[] = ["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"];
  
  
  getFullYearAndMonth(): string {
    const d = new Date()
    const year = d.getFullYear()
    const numMonth = d.getMonth()
    const monthName = this.month[numMonth]
    return monthName + ' ' + year
  }

}
