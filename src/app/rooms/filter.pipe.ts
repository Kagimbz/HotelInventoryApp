import { Pipe, PipeTransform } from '@angular/core';
import { RoomConfig } from './room';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(rooms: RoomConfig[], price: number): RoomConfig[] {
    return rooms.filter(room => room.price >= price);
  }

}
