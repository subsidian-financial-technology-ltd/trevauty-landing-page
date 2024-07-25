import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDisplayLoaderComponent } from './card-display-loader.component';

describe('ProductDisplayLoaderComponent', () => {
  let component: CardDisplayLoaderComponent;
  let fixture: ComponentFixture<CardDisplayLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDisplayLoaderComponent]
    });
    fixture = TestBed.createComponent(CardDisplayLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
