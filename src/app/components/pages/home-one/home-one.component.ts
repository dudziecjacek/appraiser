import { Component, OnInit } from '@angular/core';
import { Image } from 'angular2_photoswipe';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {
  title = 'angular2-photoswipe-demo';
  image1: Image;
  image2: Image;
  sampleId: string;

  isTileOneSelected: boolean;
  isTileTwoSelected: boolean;

  constructor() { }

  toggleTile(tileNumber: number) {

    if (tileNumber === 1) {
      this.isTileTwoSelected = false;
      this.isTileOneSelected = !this.isTileOneSelected;
    } else {
      if (tileNumber === 2) {
        this.isTileOneSelected = false;
        this.isTileTwoSelected = !this.isTileTwoSelected;
      }
    }
  }

  ngOnInit() {
    this.sampleId = 'sampleId';

    this.image1 = new Image();
    this.image1.largeUrl = './../../../../assets/img/documents/certificate1.png';
    this.image1.height = 2337;
    this.image1.width = 1636;
    this.image1.id = 0;
    this.image1.size = `${this.image1.width}x${this.image1.height}`;
    this.image1.thumbUrl = './../../../../assets/img/documents/certificate1-thumb.png';
    // this.image1.description = 'hello world';
    // this.image1.author = 'David Wollschlegel';

    this.image2 = new Image();
    this.image2.largeUrl = './../../../../assets/img/documents/certificate2.png';
    this.image2.height = 1947;
    this.image2.width = 1306;
    this.image2.id = 1;
    this.image2.size = `${this.image2.width}x${this.image2.height}`;
    this.image2.thumbUrl = './../../../../assets/img/documents/certificate2-thumb.png';
  }
}
