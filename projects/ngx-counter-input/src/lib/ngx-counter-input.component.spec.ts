import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCounterInputComponent } from './ngx-counter-input.component';

describe('NgxCounterInputComponent', () => {
  let component: NgxCounterInputComponent;
  let fixture: ComponentFixture<NgxCounterInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCounterInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCounterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
