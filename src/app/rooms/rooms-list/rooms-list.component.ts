import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomConfig } from '../room';

@Component({
  selector: 'hotelinvapp-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent implements OnInit{
  @Input() rooms: RoomConfig[] = [];
  @Output( ) selectedRoom = new EventEmitter<RoomConfig>();

  constructor(){ }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  selectRoom(room: RoomConfig): void {
    this.selectedRoom.emit(room);
  }

}
