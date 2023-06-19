import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundTransactionHomeComponent } from './refund-transaction-home.component';

describe('RefundTransactionHomeComponent', () => {
  let component: RefundTransactionHomeComponent;
  let fixture: ComponentFixture<RefundTransactionHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefundTransactionHomeComponent]
    });
    fixture = TestBed.createComponent(RefundTransactionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
