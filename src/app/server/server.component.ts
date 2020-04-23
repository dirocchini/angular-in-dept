import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .setColor {
      color: white;
    }
  `],
})
export class ServerComponent implements OnInit {
  isHidden = false;
  toggleTimes = 0;
  toggleArr = [];

  constructor() {}

  ngOnInit() {}

  toggleIsVisible() {
    this.isHidden = !this.isHidden;
    this.toggleTimes = this.toggleTimes + 1;
    this.toggleArr.push(Date());
  }


}
