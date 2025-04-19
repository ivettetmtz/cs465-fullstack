import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { NavbarComponent } from './navbar/navbar.component';

// Connects the components together for the application
@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, TripListingComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Travlr Getaways Admin!';
}