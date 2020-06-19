import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'NgxCatCounter';
	public formulario: FormGroup;
	public time: number = 15;

	constructor(
		private _formBuilder: FormBuilder
	) {
		this.formulario = this._formBuilder.group({
			time: 15
		});
	}
}