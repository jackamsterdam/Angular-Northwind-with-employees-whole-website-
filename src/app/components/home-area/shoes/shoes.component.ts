import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {
//  message!: string
  constructor() { }

  ngOnInit(): void {
  }


 

  shoes = [
    {id: 1, name: 'פומה'},
    {id: 2, name: 'אדידס'},
    {id: 3, name: 'נייק'},
    {id: 4, name: "סקצ'רס"}
  ]

}
