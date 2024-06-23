import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomConfig } from '../room';

@Component({
  selector: 'hotelinvapp-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy{
  @Input() rooms: RoomConfig[] = [];
  @Input() title: string = '';
  @Input() price: number = 0;
  @Output( ) selectedRoom = new EventEmitter<RoomConfig>();

  constructor(){ }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {
    console.log(`Rooms List Component Ts ngOnInit`);
  }

  ngOnDestroy(): void {
    console.log(`Oh noooo`)
  }

  selectRoom(room: RoomConfig): void {
    this.selectedRoom.emit(room);
  }

}
