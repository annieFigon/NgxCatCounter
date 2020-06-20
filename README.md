# NGX Counter 🐙
Counter for Angular.
  - Works with Reactive Forms! 🎉
  - Compatible with Angular 9 🎆

### Installation 🔨
```
npm i ngx-counter-input
```
Add in app.module.ts
```
import { NgxCounterInputModule } from 'ngx-counter-input';
```
Dependencies:
```sh
$ npm install --save @fortawesome/fontawesome-free
$ npm i bootstrap
```

### Styling 💄
To change the colors of the controls:
```
.time-controls {
	background-color: #new-color !important;
	color: #new-color !important;
}
```

### Options 🧱
| Option | Type |
| ------ | ------ |
| step | Number - Increment or decrease of the number |
| counterRangeMin | Number - Counter minimum |
| counterRangeMax | Number - Counter maximum |
| counterValue | Number - Initial value |

### Example 🐬
Reactive Forms:
```
<form [formGroup]="formulario">
	<ngx-counter-input formControlName="time" [step]="15" [counterRangeMin]="15" [counterRangeMax]="240" [counterValue]="15"></ngx-counter>
</form>
```

NgModel:
```
<ngx-counter-input [(ngModel)]="time" [step]="15" [counterRangeMin]="15" [counterRangeMax]="240" [counterValue]="15"></ngx-counter>
```