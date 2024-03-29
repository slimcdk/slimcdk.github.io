import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePixelMountProjectComponent } from './google-pixel-mount-project.component';

describe('GooglePixelMountProjectComponent', () => {
  let component: GooglePixelMountProjectComponent;
  let fixture: ComponentFixture<GooglePixelMountProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GooglePixelMountProjectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GooglePixelMountProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
