import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../homework3.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() arrChild: Array<ITask> = [];
  public newtaskName = '';
  public editStatus = false;
  public currentId!: number;

  constructor() { }

  ngOnInit(): void {
  }

  editTask(index: number): void {
    this.editStatus = true;
    this.currentId = index;
    this.newtaskName = this.arrChild[index].name;
  }

  deleteTask(index: number): void {
    this.arrChild.splice(index, 1)
  }

  saveTask(): void {
    this.editStatus = false;
    this.arrChild[this.currentId].name = this.newtaskName;
  }

}
