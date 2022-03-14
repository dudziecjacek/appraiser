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
  image3: Image;
  image4: Image;
  image5: Image;
  image6: Image;
  isPdf: boolean[] = [false, false]
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

    this.image2 = new Image();
    this.image2.largeUrl = './../../../../assets/img/documents/certificate2.png';
    this.image2.height = 1947;
    this.image2.width = 1306;
    this.image2.id = 1;
    this.image2.size = `${this.image2.width}x${this.image2.height}`;
    this.image2.thumbUrl = './../../../../assets/img/documents/certificate2-thumb.png';

    this.image3 = new Image();
    this.image3.largeUrl = './../../../../assets/img/documents/certificate3.png';
    this.image3.height = 1754;
    this.image3.width = 1240;
    this.image3.id = 2;
    this.image3.size = `${this.image3.width}x${this.image3.height}`;
    this.image3.thumbUrl = './../../../../assets/img/documents/certificate3-thumb.png';
    
    this.image4 = new Image();
    this.image4.largeUrl = './../../../../assets/img/documents/certificate4.png';
    this.image4.height = 1754;
    this.image4.width = 2500;
    this.image4.id = 3;
    this.image4.size = `${this.image4.width}x${this.image4.height}`;
    this.image4.thumbUrl = './../../../../assets/img/documents/certificate4-thumb.png';

    this.image5 = new Image();
    this.image5.largeUrl = './../../../../assets/img/documents/certificate5.png';
    this.image5.height = 1754;
    this.image5.width = 2500;
    this.image5.id = 4;
    this.image5.size = `${this.image5.width}x${this.image5.height}`;
    this.image5.thumbUrl = './../../../../assets/img/documents/certificate5-thumb.png';

    this.image6 = new Image();
    this.image6.largeUrl = './../../../../assets/img/documents/certificate6.png';
    this.image6.height = 1754;
    this.image6.width = 2500;
    this.image6.id = 5;
    this.image6.size = `${this.image6.width}x${this.image6.height}`;
    this.image6.thumbUrl = './../../../../assets/img/documents/certificate6-thumb.png';
  }

  togglePdf(index: number) {
    this.isPdf[index] = !this.isPdf[index];
  }
}
