import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { LINK_TOKEN, LINK_TOKEN_VALUE_2 } from '../services/link-config.service';


@NgModule({
  declarations: [
    RoomBookingComponent,
    AddRoomComponent,
    RoomsComponent,
    RoomsListComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule
  ],
  providers: [
    {
      provide: LINK_TOKEN,
      useValue: LINK_TOKEN_VALUE_2
    }
  ]
})
export class RoomsModule { }
