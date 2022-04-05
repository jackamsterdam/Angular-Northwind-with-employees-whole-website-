import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.css']
})
export class ColorBoxComponent implements OnInit {
// message!: string
color!: string


// antoerh option to send styles object: 
myStyles = {
  backgroundColor: "green",
  color: 'blue',
  fontSize: 'xx-large'
}
  constructor() { }

  ngOnInit(): void {
  }


  
}
