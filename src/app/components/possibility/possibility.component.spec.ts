import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibilityComponent } from './possibility.component';

describe('PossibilityComponent', () => {
  let component: PossibilityComponent;
  let fixture: ComponentFixture<PossibilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PossibilityComponent]
    });
    fixture = TestBed.createComponent(PossibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
