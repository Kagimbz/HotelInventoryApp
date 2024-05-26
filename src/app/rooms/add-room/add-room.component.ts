import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotelinvapp-add-room',
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.scss'
})
export class AddRoomComponent implements OnInit{
  ngOnInit(): void {
    console.log('AddRoomComponent called')
  }

}
