import { Component, OnInit } from '@angular/core';
import { PicturesService } from 'src/app/services/pictures.service';
// import photo from '../../assets/images/coffee.JPG'
// import photo from '../../../../assets/images/'
//  import photo from 'src/assets/images/'



@Component({
  selector: 'app-display-images',
  templateUrl: './display-images.component.html',
  styleUrls: ['./display-images.component.css']
})
export class DisplayImagesComponent implements OnInit {
  str = 'fdfdf'

  constructor(public picturesService: PicturesService) { }

  ngOnInit(): void {
   // this.image = this.picturesService.displayPicturesByTimeOfDay()
  }

  showPhoto(){
    return this.picturesService.displayPicturesByTimeOfDay()
  }

}
