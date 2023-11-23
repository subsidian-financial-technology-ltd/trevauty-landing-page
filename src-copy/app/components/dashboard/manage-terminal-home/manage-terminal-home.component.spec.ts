import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTerminalHomeComponent } from './manage-terminal-home.component';

describe('ManageTerminalHomeComponent', () => {
  let component: ManageTerminalHomeComponent;
  let fixture: ComponentFixture<ManageTerminalHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageTerminalHomeComponent]
    });
    fixture = TestBed.createComponent(ManageTerminalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
