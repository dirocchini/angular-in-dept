import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  isDisabled: boolean;
  serverName: string;
  serverCreationStatus: string;

  constructor() {
    this.isDisabled = true;

    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }

  ngOnInit() {}

  doSomething() {
    this.serverCreationStatus = 'Server was created. Name: ' + this.serverName;
  }
}
