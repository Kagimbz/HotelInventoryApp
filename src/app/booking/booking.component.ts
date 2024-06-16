import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'hotelinvapp-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(private configService: ConfigService, private formBuilder: FormBuilder) {
    console.log(configService);
  }

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      roomId: new FormControl({value: '2', disabled: true}),
      guestEmail: [''],
      checkInDate: [''],
      checkOutDate: [''],
      bookingStatus: [''],
      bookingAmt: [''],
      bookingDate: [''],
      guestMobileNo: [''],
      guestName: [''],
      guestAddress: this.formBuilder.group({
        postalAddress: [''],
        zipCode: [''],
        city: ['']
      }),
      guests: this.formBuilder.array([this.formBuilder.group({
        guestName: [''],
        age: ['']
      })])
    })
  }


  addBooking() {
    console.log(this.bookingForm.getRawValue());
    
  }

  addGuest() {
    this.guests.push(this.formBuilder.group({
      guestName: [''],
      age: ['']
    }))
  }

}
