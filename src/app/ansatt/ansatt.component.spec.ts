import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsattComponent } from './ansatt.component';

describe('AnsattComponent', () => {
  let component: AnsattComponent;
  let fixture: ComponentFixture<AnsattComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnsattComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnsattComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
