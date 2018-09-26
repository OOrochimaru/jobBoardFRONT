import { FormControl, Validators } from '@angular/forms';
export class CustomValidators extends Validators {
static validateFullname(control: FormControl){
    if (control.value && control.value.length > 5) {
        console.log('hello');
      return control.value;
    }else{
      return null;
    }
  }
}