import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework2',
  templateUrl: './homework2.component.html',
  styleUrls: ['./homework2.component.scss']
})
export class Homework2Component implements OnInit {
  public login!: string;
  public password!: string;
  public email!: string;
  public currentEditId!: number;
  public editStatus = false;
  public users: Array<IPerson> = [
    {
      login: 'Ivan',
      password: 'Ivan123',
      email: 'ivan@gmail'
    },

    {
      login: 'Bohdan',
      password: 'Bohdan123',
      email: 'bohdan@gmail'
    },

    {
      login: 'Taras',
      password: 'Taras123',
      email: 'taras@gmail'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.users);
  }

  addUser(): void {
    const newUser = {
      login: this.login,
      password: this.password,
      email: this.email,
    };
    this.users.push(newUser);
    this.reset()
  }
  saveUser(): void {
    const newUser = {
      login: this.login,
      password: this.password,
      email: this.email,
    };
    this.users[this.currentEditId] = newUser;
    this.editStatus = false;
    this.reset()
  }

  editUser(index: number): void {
    this.editStatus = true;
    this.currentEditId = index;
    this.login = this.users[index].login;
    this.password = this.users[index].password;
    this.email = this.users[index].email;
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1)
  }

  reset(): void {
    this.login = '';
    this.password = '';
    this.email = '';
  }
}

interface IPerson {
  login: string;
  password: string;
  email: string;
}