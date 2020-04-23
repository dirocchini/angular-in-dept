import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ServerComponent } from './server/server.component';
import { ExerciseBasicsComponent } from './exercise-basics/exercise-basics.component';


@NgModule({
  declarations: [AppComponent, ServerComponent, ExerciseBasicsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
