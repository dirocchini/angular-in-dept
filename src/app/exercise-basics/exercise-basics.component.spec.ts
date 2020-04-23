import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseBasicsComponent } from './exercise-basics.component';

describe('ExerciseBasicsComponent', () => {
  let component: ExerciseBasicsComponent;
  let fixture: ComponentFixture<ExerciseBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
