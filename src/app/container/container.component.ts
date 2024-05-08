import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'hotelinvapp-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(EmployeesComponent) employeesComponent!: EmployeesComponent


  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.employeesComponent.empName = 'Mark';
  }

}
