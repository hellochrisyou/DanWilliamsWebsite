import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsMobileComponent } from './testimonials-mobile.component';

describe('TestimonialsMobileComponent', () => {
  let component: TestimonialsMobileComponent;
  let fixture: ComponentFixture<TestimonialsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
