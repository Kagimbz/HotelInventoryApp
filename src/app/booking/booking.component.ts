import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'hotelinvapp-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {

  constructor(private configService: ConfigService) { 
    console.log(configService);
    
  }

}
