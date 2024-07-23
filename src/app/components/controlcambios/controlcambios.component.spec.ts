import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlcambiosComponent } from './controlcambios.component';

describe('ControlcambiosComponent', () => {
  let component: ControlcambiosComponent;
  let fixture: ComponentFixture<ControlcambiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlcambiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlcambiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
