import { Component, OnInit } from '@angular/core';
import { RoomInfo } from './room';

@Component({
  selector: 'hotelinvapp-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit{
  constructor() {}

  hotelName: string = "Hilton Hotel";

  numberOfRooms: number = 10;

  hideRooms = false;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggle() {
    console.log("Toggle called");
    this.hideRooms = !this.hideRooms;
  }

  roomInfo: RoomInfo = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5

  }

}
