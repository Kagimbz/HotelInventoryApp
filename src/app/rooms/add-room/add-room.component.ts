import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../services/rooms.service';
import { RoomConfig } from '../room';

@Component({
  selector: 'hotelinvapp-add-room',
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.scss'
})
export class AddRoomComponent implements OnInit {

  successMessage : string = '';

  room: RoomConfig = {
    roomNumber: 0,
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkInTime: new Date(),
    checkOutTime: new Date()
  };

  constructor(private roomService: RoomsService) { }

  ngOnInit(): void {
    console.log('AddRoomComponent called')
  }

  addRoom() {
    this.roomService.addRoom(this.room).subscribe(
      (data) => this.successMessage = "Room Added Successfully"
    )
  }

}
