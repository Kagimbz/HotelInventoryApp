import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidator {
    static validateName(control: AbstractControl) {
        const value = control.value as string;
        if (value.includes('test')) {
            return { invalidName: true }
        }
        return null;
    }

    static validateCharacterPresence(char: string) {
        return (control: AbstractControl) => {
            const value = control.value as string;
            if (value.includes(char)) {
                return { invalidName: true }
            }
            return null;
        }
    }

    static validateDate(control: FormGroup) {
        const checkInDate: any = new Date(control.get('checkInDate')?.value);
        const checkOutDate: any = new Date(control.get('checkOutDate')?.value);
        const diff = (checkOutDate - checkInDate)/(1000 * 60 * 60 * 24);
        if (diff < 0) {
            return { invalidDate: true }
        }
        return null;
    }
}