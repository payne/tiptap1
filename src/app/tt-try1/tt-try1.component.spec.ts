import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtTry1Component } from './tt-try1.component';

describe('TtTry1Component', () => {
  let component: TtTry1Component;
  let fixture: ComponentFixture<TtTry1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtTry1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtTry1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
