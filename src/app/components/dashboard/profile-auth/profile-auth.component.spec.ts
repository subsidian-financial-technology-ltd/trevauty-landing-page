import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAuthComponent } from './profile-auth.component';

describe('ProfileAuthComponent', () => {
  let component: ProfileAuthComponent;
  let fixture: ComponentFixture<ProfileAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileAuthComponent]
    });
    fixture = TestBed.createComponent(ProfileAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
