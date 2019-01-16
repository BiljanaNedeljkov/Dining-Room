import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingPriceComponent } from './rating-price.component';

describe('RatingPriceComponent', () => {
  let component: RatingPriceComponent;
  let fixture: ComponentFixture<RatingPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
