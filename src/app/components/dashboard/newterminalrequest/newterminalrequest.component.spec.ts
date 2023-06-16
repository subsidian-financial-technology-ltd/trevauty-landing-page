import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewterminalrequestComponent } from './newterminalrequest.component';

describe('NewterminalrequestComponent', () => {
  let component: NewterminalrequestComponent;
  let fixture: ComponentFixture<NewterminalrequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewterminalrequestComponent]
    });
    fixture = TestBed.createComponent(NewterminalrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
