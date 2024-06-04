import { Directive, OnInit } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[hotelinvappEmailvalidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: EmailvalidatorDirective, multi: true}
  ]
})
export class EmailvalidatorDirective implements OnInit, Validator {

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const value = control.value as string;
    if(value.includes('test')) {
      return {
        'invalidEmail': true
      };  
    }

    return null;
  }

  registerOnValidatorChange?(fn: () => void): void { }

  ngOnInit(): void { }

}
