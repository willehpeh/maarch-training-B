import { AbstractControl } from '@angular/forms';

export function minLengthValidator(length: number) {
  return (control: AbstractControl): {[key: string]: any} | null => {
    return control.value.length <= length ? { 'String too short': control.value } : null;
  };
}
