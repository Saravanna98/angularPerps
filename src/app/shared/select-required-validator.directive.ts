import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";


@Directive({
    selector: '[appSelectorValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: SelectRequiredValidator,
        multi: true
    }]
})
export class SelectRequiredValidator implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {
        return control.value == '-1' ? { 'defaultValue': true } : null;
    }
}