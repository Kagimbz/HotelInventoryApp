import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { roomsGuard } from './guards/rooms.guard';

const routes: Routes = [
  { path: '', 
    component: RoomsComponent, 
    canActivateChild: [roomsGuard],
    children: [
      { path: 'add', component: AddRoomComponent},
      // { path: ':id', component: RoomBookingComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
