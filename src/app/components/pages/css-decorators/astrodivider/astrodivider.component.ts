import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-astrodivider',
  templateUrl: './astrodivider.component.html',
  styleUrls: ['./astrodivider.component.scss']
})
export class AstrodividerComponent implements OnInit {
  @Input() isInverted: boolean;

  constructor() { }

  ngOnInit() {
  }

}
