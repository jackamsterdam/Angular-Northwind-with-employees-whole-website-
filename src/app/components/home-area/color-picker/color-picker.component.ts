import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  @Output()
report = new EventEmitter<string>()

  constructor() { }



  ngOnInit(): void {
  }

  reportColor(color: string):void {
     this.report.emit(color)
  }


}
