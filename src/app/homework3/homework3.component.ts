import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework3',
  templateUrl: './homework3.component.html',
  styleUrls: ['./homework3.component.scss']
})
export class Homework3Component implements OnInit {
  public taskName!: string;
  public arrTask: Array<ITask> = [
    {
      name: 'Javascript',
      status: false
    },
    {
      name: 'JQuery',
      status: false
    },
    {
      name: 'Angular',
      status: false
    },
    {
      name: 'Bootstrap',
      status: false
    },
    {
      name: 'HTML5',
      status: false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void {
    const newTask = {
      name: this.taskName,
      status: false
    }
    this.arrTask.push(newTask)

    this.taskName = '';
  }

}
export interface ITask {
  name: string;
  status: boolean;
}