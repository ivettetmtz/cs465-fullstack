import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent implements OnInit {
  
  @Input('trip') trip: any;

  constructor(private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    
  }
  // Trip can be edited or deleted based on the trip code found
  // Also checks authentication for user logged in
  public isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  // Created method to delete the trip code
  public deleteTrip(trip: Trip): void {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['delete-trip']);
  }
}