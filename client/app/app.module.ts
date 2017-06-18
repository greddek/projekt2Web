import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';



import {AppComponent} from './app.component';
import {ZadComponent} from './comp/tasks/tasks.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [AppComponent, ZadComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
