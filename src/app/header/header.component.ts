import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotelinvapp-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  headerTitle: string = "New Title";

  constructor() {}

  ngOnInit(): void {
    console.log(`Header component initialized`);
  }

}
