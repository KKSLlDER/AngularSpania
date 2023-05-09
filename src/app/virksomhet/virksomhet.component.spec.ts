import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirksomhetComponent } from './virksomhet.component';

describe('VirksomhetComponent', () => {
  let component: VirksomhetComponent;
  let fixture: ComponentFixture<VirksomhetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirksomhetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirksomhetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
