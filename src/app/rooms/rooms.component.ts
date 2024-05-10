import { AfterViewChecked, AfterViewInit, Component, Inject, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { RoomConfig, RoomInfo } from './room';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { APP_CONFIG_TOKEN, AppConfig } from '../app_config/appconfig.service';
import { LOCAL_STORAGE_TOKEN } from '../localstorage.token';

@Component({
  selector: 'hotelinvapp-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked{
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent

  constructor(@SkipSelf() private roomsService: RoomsService, 
  @Inject(APP_CONFIG_TOKEN) private appConfigToken: AppConfig, 
  @Inject(LOCAL_STORAGE_TOKEN) private localStorageToken: Storage) {
    console.log(appConfigToken.apiUrl);
  }

  roomList! : RoomConfig[]

  hotelName: string = "Hilton Hotel";

  numberOfRooms: number = 10;

  hideRooms = false;

  title : string = "Rooms List";

  ngOnInit(): void {
    console.log(`Rooms Component Ts ngOnInit`);

    this.localStorageToken.setItem('name', 'Hilton Hotel');

    this.roomsService.getRooms().subscribe(rooms => {
      this.roomList = rooms
    })
  }

  ngAfterViewInit(): void {}

  ngAfterViewChecked(): void {
    this.headerComponent.headerTitle = "Hotel Inventory App";
  }

  toggle() {
    console.log("Toggle called");
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List v2"
  }

  roomInfo: RoomInfo = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5

  }


  // roomList : RoomConfig[] = this.roomsService.getRooms();

  selectRoom(room: RoomConfig) {
    console.log(`Selected room number ${room.roomNumber}`);
  }

  addRoom() {
    const newRoom: RoomConfig = {
      roomNumber: 4,
      roomType: "New Room",
      amenities: "Air Conditioner, TV, Kitchen, Free Wi-Fi",
      price: 300.50,
      photos: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww",
      checkInTime: new Date('23-Apr-2024'),
      checkOutTime: new Date('24-Apr-2024')
    }

    this.roomList = [...this.roomList, newRoom];
  }
}
