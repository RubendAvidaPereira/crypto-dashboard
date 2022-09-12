// Main Imports
import { Component, OnInit } from '@angular/core';

// Ripple Animation with PrimeNG
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'my-first-project';

  constructor(private primengConfig: PrimeNGConfig){}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
