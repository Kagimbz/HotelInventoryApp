import { AfterContentInit, Component, Host, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hotelinvapp-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss',
  providers: [RoomsService]
})
export class EmployeesComponent implements OnInit{
  empName: string = 'John';

  constructor(@Host() private roomsService: RoomsService) {}

  ngOnInit(): void {}

}
