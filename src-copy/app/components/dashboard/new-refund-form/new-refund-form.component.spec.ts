import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRefundFormComponent } from './new-refund-form.component';

describe('NewRefundFormComponent', () => {
  let component: NewRefundFormComponent;
  let fixture: ComponentFixture<NewRefundFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRefundFormComponent]
    });
    fixture = TestBed.createComponent(NewRefundFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
