import { NgModule } from '@angular/core';
import { NgxCounterInputComponent } from './ngx-counter-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [NgxCounterInputComponent],
	imports: [
		FormsModule
	],
	exports: [NgxCounterInputComponent]
})
export class NgxCounterInputModule { }