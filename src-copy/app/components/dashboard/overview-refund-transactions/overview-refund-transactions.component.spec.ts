import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewRefundTransactionsComponent } from './overview-refund-transactions.component';

describe('OverviewRefundTransactionsComponent', () => {
  let component: OverviewRefundTransactionsComponent;
  let fixture: ComponentFixture<OverviewRefundTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewRefundTransactionsComponent]
    });
    fixture = TestBed.createComponent(OverviewRefundTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
