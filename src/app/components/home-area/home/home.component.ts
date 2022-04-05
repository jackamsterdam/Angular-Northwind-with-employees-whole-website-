import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // quantity: number = 350
  // discount: number = 10
  // message: string ='red'
  // message!: string

  // cant do this: console.log("message", message);


// shoes = [
//   {id: 1, name: 'פומה'},
//   {id: 2, name: 'אדידס'},
//   {id: 3, name: 'נייק'},
//   {id: 4, name: "סקצ'רס"}
// ]


  constructor() { }

  ngOnInit(): void {
  }

  // isSunday(): boolean {
  //   const now = new Date()
  //   const dayOfWeek = now.getDay() + 1
  //   return dayOfWeek === 1
  // }
// no need for this function because its just a string the messsage and when message changes the color will change in ngStyle or ngClass 
  // getColorFromText(): string {
  //     return this.message
  // }

}
