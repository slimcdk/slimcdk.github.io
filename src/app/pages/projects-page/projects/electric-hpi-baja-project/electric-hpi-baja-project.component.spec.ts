import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricHpiBajaProjectComponent } from './electric-hpi-baja-project.component';

describe('ElectricHpiBajaProjectComponent', () => {
  let component: ElectricHpiBajaProjectComponent;
  let fixture: ComponentFixture<ElectricHpiBajaProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricHpiBajaProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectricHpiBajaProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
