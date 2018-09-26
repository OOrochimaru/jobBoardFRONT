import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class CustomerrorsService {
  constructor() { 
  }

//get looping over every form field 
// and markthem as touched
// public formTouchedMark(formGroup : FormGroup){
//     Object.values(formGroup.controls).forEach(control =>{
//         control.markAsTouched();

//         if(control.controls){
//             control.controls.forEach(element => {
//                 this.formTouchedMark(element);
//             });
//         }
//     })
// }

//return list of error messages

public validationMessages(){
    const messages = {
        required: 'This Field is required',
        email: 'This email Address is invalid',
     
    }
}
}
