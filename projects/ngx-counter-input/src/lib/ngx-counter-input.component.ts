import { Component, forwardRef, Input, OnChanges } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

export function createCounterRangeValidator(maxValue, minValue) {
	return (c: FormControl) => {
		let err = {
			rangeError: {
				given: c.value,
				max: maxValue || 10,
				min: minValue || 0
			}
		};
		return (c.value > +maxValue || c.value < +minValue) ? err : null;
	}
}

@Component({
	selector: 'ngx-counter-input',
    templateUrl: './ngx-counter-input.component.html',
	styleUrls: ['./ngx-counter-input.scss'],
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgxCounterInputComponent), multi: true },
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgxCounterInputComponent), multi: true }
    ]
})

export class NgxCounterInputComponent implements ControlValueAccessor, OnChanges {
	propagateChange: any = () => { };
	validateFn: any = () => { };

	@Input('counterValue') _counterValue = 0;
	@Input() counterRangeMax: number;
	@Input() counterRangeMin: number;
	@Input() step: number;

	get counterValue() {
		return this._counterValue;
	}

	set counterValue(val) {
		this._counterValue = val;
		this.propagateChange(val);
	}

	ngOnChanges(inputs) {
		if (inputs.counterRangeMax || inputs.counterRangeMin) {
			this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
		}
	}

	writeValue(value) {
		if (value) {
			this.counterValue = value;
		}
	}

	registerOnChange(fn) {
		this.propagateChange = fn;
	}

	registerOnTouched() { }

	increase() {
		let temp = +this.counterValue + this.step;
		if (temp <= this.counterRangeMax) {
			this.counterValue = temp;
		}
	}

	decrease() {
		let temp = +this.counterValue - this.step;
		if (temp >= this.counterRangeMin) {
			this.counterValue = temp;
		}
	}

	validate(c: FormControl) {
		return this.validateFn(c);
	}

}