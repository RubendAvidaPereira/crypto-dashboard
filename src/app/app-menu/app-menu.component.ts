import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {

  items: MenuItem[] = []

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: "Crypto Dashboard",
        icon: "fa-solid fa-gauge-high",
        routerLink: "dashboard",
      },
      {
        label: "Bitcoin",
        icon: "fa-brands fa-bitcoin",
        routerLink: "bitcoinInfo"
      },
      {
        label: "Ethereum",
        icon: "fa-brands fa-ethereum",
        // routerLink: "ethereumInfo"
      },
    ]
  }

}
