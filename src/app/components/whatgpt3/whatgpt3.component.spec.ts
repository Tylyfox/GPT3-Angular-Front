import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whatgpt3Component } from './whatgpt3.component';

describe('Whatgpt3Component', () => {
  let component: Whatgpt3Component;
  let fixture: ComponentFixture<Whatgpt3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Whatgpt3Component]
    });
    fixture = TestBed.createComponent(Whatgpt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
