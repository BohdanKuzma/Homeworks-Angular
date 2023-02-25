import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework4',
  templateUrl: './homework4.component.html',
  styleUrls: ['./homework4.component.scss']
})
export class Homework4Component implements OnInit {

  public arrUsers: Array<IPhone> = [
    {
      firstname: 'bohdan',
      lastname: 'kuzma',
      phone: '0682323122'
    },

    {
      firstname: 'roma',
      lastname: 'bill',
      phone: '0972323122'
    },

    {
      firstname: 'oleh',
      lastname: 'semkiv',
      phone: '0682323122'
    },

    {
      firstname: 'oleh',
      lastname: 'barylko',
      phone: '0523323122'
    },

    {
      firstname: 'orest',
      lastname: 'much',
      phone: '0432323122'
    },

    {
      firstname: 'taras',
      lastname: 'topolya',
      phone: '0282323122'
    },

  ]
  public firstname = '';
  public lastname = '';
  public phone = '';
  public isAddStatus = false;
  public editStatus = false;
  public currentUser !: number;
  public isArrowStatus = false;

  public search = '';
  public type!: string;


  constructor() { }

  ngOnInit(): void {
  }

  addUser(): void {
    const user: IPhone = {
      firstname: this.firstname,
      lastname: this.lastname,
      phone: this.phone,
    }
    this.arrUsers.push(user);
    this.reset();
    this.isAddStatus = false;
  }

  reset(): void {
    this.firstname = '';
    this.lastname = '';
    this.phone = '';
  }


  delete(index: number): void {
    this.arrUsers.splice(index, 1)
  }

  edit(user: IPhone, index: number): void {
    this.editStatus = true;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.phone = user.phone;
    this.currentUser = index;
    this.isAddStatus = true;
  }

  openModal(): void {
    this.isAddStatus = true;
    this.reset()
  }

  closeModal(): void {
    this.isAddStatus = false;
    this.editStatus = false;
    this.reset()
  }


  save(): void {
    const user: IPhone = {
      firstname: this.firstname,
      lastname: this.lastname,
      phone: this.phone,
    }
    this.arrUsers[this.currentUser] = user;
    this.editStatus = false;
    this.isAddStatus = false;
    this.reset()
  }

  changeSort(type: string): void {
    this.type = type;
  }

}
export interface IPhone {
  firstname: string;
  lastname: string;
  phone: string;
}

