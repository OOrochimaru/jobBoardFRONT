import { Component, Input } from '@angular/core';
import { Errors } from '../core/models/errors.model';


@Component({
  selector: 'app-error-list',
  templateUrl: './error-list.component.html'
})
export class ErrorListComponent{
    formattedErrors: Array<string> = [];

    @Input() set error(errorList: Errors){
        this.formattedErrors = Object.keys(errorList.errors || {})
        .map(key => `${key} ${errorList.errors[key]}`);
    };

    get errorList(){
     return this.formattedErrors;
    }

}