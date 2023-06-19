import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundTransactionComponent } from './refund-transaction.component';

describe('RefundTransactionComponent', () => {
  let component: RefundTransactionComponent;
  let fixture: ComponentFixture<RefundTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefundTransactionComponent]
    });
    fixture = TestBed.createComponent(RefundTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
