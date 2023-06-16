import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewterminalListComponent } from './overviewterminal-list.component';

describe('OverviewterminalListComponent', () => {
  let component: OverviewterminalListComponent;
  let fixture: ComponentFixture<OverviewterminalListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewterminalListComponent]
    });
    fixture = TestBed.createComponent(OverviewterminalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
