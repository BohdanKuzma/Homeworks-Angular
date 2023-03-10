import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Homework1Component } from './components/homework1/homework1.component';

import { Homework2Component } from './components/homework2/homework2.component';
import { Homework3Component } from './components/homework3/homework3.component';
import { ChildComponent } from './components/homework3/child/child.component';
import { Homework4Component } from './components/homework4/homework4.component';
import { HomeComponent } from './components/home/home.component';

import { FilterPipe } from './components/homework4/filter.pipe';
import { SortPipe } from './components/homework4/sort.pipe';
import { FormsModule } from '@angular/forms';
import { WorksComponent } from './components/works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    Homework1Component,
    Homework2Component,
    Homework3Component,
    ChildComponent,
    Homework4Component,
    FilterPipe,
    SortPipe,
    HomeComponent,
    WorksComponent

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
