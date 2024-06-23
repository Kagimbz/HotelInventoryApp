import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { LINK_TOKEN, LINK_TOKEN_VALUE_2 } from '../services/link-config.service';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    RoomBookingComponent,
    AddRoomComponent,
    RoomsComponent,
    RoomsListComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LINK_TOKEN,
      useValue: LINK_TOKEN_VALUE_2
    }
  ]
})
export class RoomsModule { }
