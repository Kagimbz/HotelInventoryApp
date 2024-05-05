import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotelinvapp-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements OnInit{
  empName: string = 'John';

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
