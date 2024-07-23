import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControldocumentoComponent } from './controldocumento.component';

describe('ControldocumentoComponent', () => {
  let component: ControldocumentoComponent;
  let fixture: ComponentFixture<ControldocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControldocumentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControldocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
