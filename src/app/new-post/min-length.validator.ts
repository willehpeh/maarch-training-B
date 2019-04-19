import { AbstractControl, ValidatorFn } from '@angular/forms';

export function minLengthValidator(length: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    if (!control.value) {
      return { 'String too short': '' };
    }
    return control.value.length <= length ? { 'String too short': control.value } : null;
  };
}
