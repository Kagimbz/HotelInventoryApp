import { Component, OnInit } from '@angular/core';
import { RoomConfig, RoomInfo } from './room';

@Component({
  selector: 'hotelinvapp-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
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


  roomList : RoomConfig[] = [
    {
      roomNumber: 1,
      roomType: "Deluxe",
      amenities: "Air Conditioner, TV, Kitchen, Free Wi-Fi",
      price: 200,
      photos: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww",
      checkInTime: new Date('11-Mar-2024'),
      checkOutTime: new Date('13-Mar-2024')
    },
    {
      roomNumber: 2,
      roomType: "Deluxe",
      amenities: "Air Conditioner, TV, Kitchen, Free Wi-Fi",
      price: 300,
      photos: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww",
      checkInTime: new Date('11-Mar-2024'),
      checkOutTime: new Date('13-Mar-2024')
    },
    {
      roomNumber: 3,
      roomType: "Private Suite",
      amenities: "Air Conditioner, TV, Kitchen, Free Wi-Fi",
      price: 500,
      photos: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww",
      checkInTime: new Date('11-Mar-2024'),
      checkOutTime: new Date('13-Mar-2024')
    }
  ]

  selectRoom(room: RoomConfig) {
    console.log(`Selected room number ${room.roomNumber}`);
  }
}
