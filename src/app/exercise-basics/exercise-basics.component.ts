import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-basics',
  templateUrl: './exercise-basics.component.html',
  styleUrls: ['./exercise-basics.component.css'],
})
export class ExerciseBasicsComponent implements OnInit {
  userName: string;

  constructor() {
    this.userName = '';
  }

  ngOnInit(): void {}

  emptyUsername() {
    this.userName = '';
  }
}
