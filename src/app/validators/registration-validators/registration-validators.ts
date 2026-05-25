import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function countryValidator(allowedCountry: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
      if (!value) {
        return null;
      }
    return value === allowedCountry ? null : { invalidCountry: true };
  };
}
