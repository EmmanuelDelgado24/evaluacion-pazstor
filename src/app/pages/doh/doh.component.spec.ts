import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DohComponent } from './doh.component';

describe('DohComponent', () => {
  let component: DohComponent;
  let fixture: ComponentFixture<DohComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DohComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
