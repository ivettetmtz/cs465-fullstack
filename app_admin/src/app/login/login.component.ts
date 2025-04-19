import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user'; 

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  public formError: string = '';
  submitted = false;

  // login credentials are neeeded to login 
  credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  // Checks for password and email on the login credentials
  ngOnInit(): void { 
  }
  public onLoginSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again';
      this.router.navigateByUrl('#'); // Return to login page
    } else {
      this.doLogin();
    }
  }

  private doLogin(): void {
    let newUser = {
      name: this.credentials.name,
      email:this.credentials.email
    } as User;

    // console.log('LoginComponent::doLogin');
    // console.log(this.credentials);

    // places new credentials as the new user 
    this.authenticationService.login(newUser, this.credentials.password);

    //If user is logged in there will be a timeout time 
    if(this.authenticationService.isLoggedIn()) {
      // console.log('Router::Direct');
      this.router.navigate(['']);
    } else {
      var timer = setTimeout(() => {
        if(this.authenticationService.isLoggedIn()) {
          // console.log('Router::Pause');
          this.router.navigate(['']);
        }}, 3000);
    }
  }
}