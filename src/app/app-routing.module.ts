import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent},
  { path: 'rooms', component: RoomsComponent},
  { path: '', redirectTo: '/rooms', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
