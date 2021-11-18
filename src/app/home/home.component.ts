import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToTest(): void {
    this.router.navigate(['/test'])
      .then(() => console.log('Navigated to Test'));
  }
  navigateToHistoric(): void {
    this.router.navigate(['/historic'])
      .then(() => console.log('Navigated to Test'));
  }
  navigateToLogIn(): void {
    this.router.navigate(['/'])
      .then(() => console.log('Navigated to Log In'));
  }
}
