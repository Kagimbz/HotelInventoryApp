import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'hotelinvapp-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrl: './room-booking.component.scss'
})
export class RoomBookingComponent {

  constructor(private router: ActivatedRoute) {}

  id$ = this.router.paramMap.pipe(
    map((params) => params.get('id'))
  )

}
