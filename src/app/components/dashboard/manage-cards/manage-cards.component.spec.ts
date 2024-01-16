import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCardsComponent } from './manage-cards.component';

describe('ManageCardsComponent', () => {
  let component: ManageCardsComponent;
  let fixture: ComponentFixture<ManageCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageCardsComponent]
    });
    fixture = TestBed.createComponent(ManageCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
