import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripListingComponent } from './trip-listing.component';

// Creates a trip listing component for API route
describe('TripListingComponent', () => {
  let component: TripListingComponent;
  let fixture: ComponentFixture<TripListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
