import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Homework1Component } from './components/homework1/homework1.component';
import { Homework2Component } from './components/homework2/homework2.component';
import { Homework3Component } from './components/homework3/homework3.component';
import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './components/works/works.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'home',
  },
  {
    path: 'works', component: WorksComponent, children: [
      { path: 'cenzor', component: Homework1Component },
      { path: 'user', component: Homework2Component },
      { path: 'task', component: Homework3Component },
      { path: '', pathMatch: 'full', redirectTo: 'cenzor' },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
