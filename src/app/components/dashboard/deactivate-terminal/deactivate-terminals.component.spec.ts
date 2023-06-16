import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateTerminalsComponent } from './deactivate-terminals.component';

describe('DeactivateTerminalsComponent', () => {
  let component: DeactivateTerminalsComponent;
  let fixture: ComponentFixture<DeactivateTerminalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeactivateTerminalsComponent]
    });
    fixture = TestBed.createComponent(DeactivateTerminalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
