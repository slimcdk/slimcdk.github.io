import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiStepperProjectComponent } from './wifi-stepper-project.component';

describe('WifiStepperProjectComponent', () => {
  let component: WifiStepperProjectComponent;
  let fixture: ComponentFixture<WifiStepperProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WifiStepperProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WifiStepperProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
