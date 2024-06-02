import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomBookingComponent } from './rooms/room-booking/room-booking.component';
import { AddRoomComponent } from './rooms/add-room/add-room.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent},
  { path: 'rooms', component: RoomsComponent},
  { path: 'rooms/add', component: AddRoomComponent},
  { path: 'rooms/:id', component: RoomBookingComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
