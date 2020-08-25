import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor() { }

  public onClick(elementId: string): void {
    document.querySelector('#' + elementId).scrollIntoView();
  }
}
