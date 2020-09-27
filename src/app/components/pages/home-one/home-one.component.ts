import { Component } from '@angular/core';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent {
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
}
