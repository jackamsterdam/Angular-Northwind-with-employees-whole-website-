import { Injectable } from '@angular/core';
// import photo from '../../assets/images/coffee.JPG'

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
time: string
  // constructor() { }

  displayPicturesByTimeOfDay():any {
   const now = new Date()
  // this.time = now.toLocaleTimeString()
  // debugger
  let hour = now.getHours()

  if (hour > 8 && hour <= 12) {
    // return '../../../../assets/images/coffee.JPG'
    return 'assets/images/coffee.JPG'
  }
  if (hour > 12 && hour <= 16) {
    // return '../../../../assets/images/juice.jpg'
    return 'assets/images/juice.jpg'
  }
  if (hour > 16 && hour <= 20) {
    // return '../../../../assets/images/tea.jpg'
    return 'assets/images/tea.jpg'
  }
  if ((hour > 20 && hour < 23) || (hour >= 0 && hour <= 8) ){
    // return '../../../../assets/images/water.jpg'
    return 'assets/images/water.jpg'
  }





    //  switch(this.time) {
    //    case 
    //  }
  }
}
