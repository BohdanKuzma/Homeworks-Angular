import { Pipe, PipeTransform } from '@angular/core';
import { IPhone } from './homework4.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(arrUsers: IPhone[], sort: string): IPhone[] {
    if (!arrUsers) return [];
    if (!sort) return arrUsers;

    if (sort === 'asc') {
      return arrUsers.sort((a, b) => (a.firstname > b.firstname) ? 1 : ((a.firstname < b.firstname) ? -1 : 0))
    }


    if (sort === 'asclname') {
      return arrUsers.sort((a, b) => (a.lastname < b.lastname) ? -1 : ((a.lastname > b.lastname) ? 1 : 0))
    }
    if (sort === 'desclname') {
      return arrUsers.sort((a, b) => (a.lastname > b.lastname) ? -1 : ((a.lastname < b.lastname) ? 1 : 0))
    }

    if (sort === 'ascnumber') {
      return arrUsers.sort((a, b) => (a.phone < b.phone) ? -1 : ((a.phone > b.phone) ? 1 : 0))
    }
    if (sort === 'descnumber') {
      return arrUsers.sort((a, b) => (a.phone > b.phone) ? -1 : ((a.phone < b.phone) ? 1 : 0))
    }





    return arrUsers.sort((a, b) => (a.firstname > b.firstname) ? -1 : ((a.firstname < b.firstname) ? 1 : 0))


  }

}
