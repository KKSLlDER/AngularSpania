import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeepicsComponent } from './employeepics.component';

describe('EmployeepicsComponent', () => {
  let component: EmployeepicsComponent;
  let fixture: ComponentFixture<EmployeepicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeepicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeepicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
