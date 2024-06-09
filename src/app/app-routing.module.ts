import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'rooms', 
    loadChildren: () => 
      import('./rooms/rooms.module').then((m) => m.RoomsModule)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'booking', 
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) 
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
