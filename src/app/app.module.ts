import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import * as fromScoreboard from './score-board/scoreboard.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({game: fromScoreboard.scoreboardReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
