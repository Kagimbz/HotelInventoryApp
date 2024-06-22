import { CanDeactivateFn } from '@angular/router';
import { BookingComponent } from '../booking.component';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export const bookingGuard: CanDeactivateFn<BookingComponent> = (component, currentRoute, currentState, nextState) => {
  const matSnackBar = inject(MatSnackBar);
  
  if (component.bookingForm.pristine) {
    return true;

  } else{
    matSnackBar.open('You Have Unsaved Changes!', 'DISCARD');
    return false;
  }
};
