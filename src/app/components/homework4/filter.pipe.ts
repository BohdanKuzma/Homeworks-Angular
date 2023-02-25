import { Pipe, PipeTransform } from '@angular/core';
import { IPhone } from './homework4.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arrUsers: IPhone[], search: string): IPhone[] {
    if (!arrUsers) return [];
    if (!search) return arrUsers;
    return arrUsers.filter(user => user.firstname.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }

}
