import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialComponent } from './financial.component';

describe('FinancialComponent', () => {
  let component: FinancialComponent;
  let fixture: ComponentFixture<FinancialComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FinancialComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
