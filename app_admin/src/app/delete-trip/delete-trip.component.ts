import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';
//import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit {

  constructor(
    private router: Router,
    private tripService: TripDataService
  ) { }

  ngOnInit() {
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed the tripCode!");
      this.router.navigate(['']);
      return;
    }

    // Added method to find trip code to delete the trip
    console.log("DeleteTripComponent found tripCode " + tripCode);

    this.tripService.deleteTrip(tripCode)
      .subscribe( (data) => {
        console.log('Trip deleted successfully:', data);
        this.router.navigate(['list-trips']);
      },
      (error) => {
        console.error('Error deleting trip:', error);
      }
    );
  }

}
