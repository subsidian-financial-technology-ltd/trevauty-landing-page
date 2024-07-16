import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCardComponent } from './get-card.component';

describe('EditCardComponent', () => {
  let component: GetCardComponent;
  let fixture: ComponentFixture<GetCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetCardComponent]
    });
    fixture = TestBed.createComponent(GetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
