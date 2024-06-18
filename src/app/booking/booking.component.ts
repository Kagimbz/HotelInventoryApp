import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
      roomId: new FormControl({value: '2', disabled: true}, {validators: [Validators.required]}),
      guestEmail: ['', [Validators.required, Validators.email]],
      checkInDate: [''],
      checkOutDate: [''],
      bookingStatus: [''],
      bookingAmt: [''],
      bookingDate: [''],
      guestMobileNo: [''],
      guestName: ['', [Validators.required, Validators.minLength(5)]],
      guestAddress: this.formBuilder.group({
        postalAddress: ['', [Validators.required]],
        zipCode: [''],
        city: ['']
      }),
      guests: this.formBuilder.array([this.formBuilder.group({
        guestName: ['', [Validators.required]],
        age: ['']
      })]),
      tnc: new FormControl(false, {validators: Validators.requiredTrue})
    },
    {
      updateOn: 'blur'
    })

    this.getFormData();

    this.bookingForm.valueChanges.subscribe((data) => {
      console.log(data);
    })
  }

  getFormData() {
    this.bookingForm.patchValue({
      roomId: '2',
      guestEmail: 'testemail@gmail.com',
      checkInDate: '',
      checkOutDate: '',
      bookingStatus: '',
      guestMobileNo: '',
      guestName: 'Halima',
      guestAddress: {
        postalAddress: '010101-101',
        zipCode: '',
        city: ''
      },
      guests: [],
      tnc: false
    })
  }


  addBooking() {
    console.log(this.bookingForm.getRawValue());
    this.bookingForm.reset({
      roomId: '2',
      guestEmail: '',
      checkInDate: '',
      checkOutDate: '',
      bookingStatus: '',
      bookingAmt: '',
      bookingDate: '',
      guestMobileNo: '',
      guestName: '',
      guestAddress: {
        postalAddress: '',
        zipCode: '',
        city: ''
      },
      guests: [],
      tnc: false
    })
    
  }

  addGuest() {
    this.guests.push(this.formBuilder.group({
      guestName: [''],
      age: ['']
    }))
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }

}
