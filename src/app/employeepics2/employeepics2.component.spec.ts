import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeepics2Component } from './employeepics2.component';

describe('Employeepics2Component', () => {
  let component: Employeepics2Component;
  let fixture: ComponentFixture<Employeepics2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Employeepics2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employeepics2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
