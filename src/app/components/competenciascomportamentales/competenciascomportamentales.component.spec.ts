import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciascomportamentalesComponent } from './competenciascomportamentales.component';

describe('CompetenciascomportamentalesComponent', () => {
  let component: CompetenciascomportamentalesComponent;
  let fixture: ComponentFixture<CompetenciascomportamentalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetenciascomportamentalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenciascomportamentalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
