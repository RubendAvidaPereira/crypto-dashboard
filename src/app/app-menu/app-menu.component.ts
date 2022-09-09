import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeChangeService } from '../shared/services/theme-change.service';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {

  items: MenuItem[] = []

  constructor(private themeService: ThemeChangeService) { }

  // Theme Boolean Check State
  // If false, theme is dark
  checkTheme: boolean = false
  
  // Change Theme in Dashboard
  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
    if (theme === 'arya-orange') {
      this.themeService.checkTheme = true
      this.themeService.updateChartOptions()
    }
    else if (theme === 'saga-orange') {
      this.themeService.checkTheme = false
      this.themeService.updateChartOptions()
    }
    this.checkTheme = this.themeService.checkTheme
  }

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
        routerLink: "ethereumInfo"
      },
    ]
  }

}
