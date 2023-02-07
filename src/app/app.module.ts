import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homework1Component } from './components/homework1/homework1.component';
import { FormsModule } from '@angular/forms';
import { Homework2Component } from './components/homework2/homework2.component';
import { Homework3Component } from './homework3/homework3.component';
import { ChildComponent } from './homework3/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    Homework1Component,
    Homework2Component,
    Homework3Component,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
