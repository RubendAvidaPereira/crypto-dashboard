import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CryptoDataService } from '../shared/services/crypto-data.service';
import { ThemeChangeService } from '../shared/services/theme-change.service';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {

  // Menu Items
  items: MenuItem[] = []

  // Search Bar string to be sent to the CryptoData Service
  searchBar: string = ''
  notLoading = true

  // Theme Boolean Check State
  // If false, theme is dark
  checkTheme: boolean = false

  constructor(
    private themeService: ThemeChangeService,
    private cryptoDataService: CryptoDataService) { }
  
  // Change Theme in Dashboard
  changeTheme(theme: string) {
    // Dark Theme
    if (theme === 'arya-orange') {
      this.themeService.checkTheme = false
      this.checkTheme = false
    }
    // Light Theme
    else if (theme === 'saga-orange') {
      this.themeService.checkTheme = true
      this.checkTheme = true
    }
    this.themeService.switchTheme(theme);
  }

  onSubmit(searchText: string){
    this.notLoading = false
    this.searchBar = searchText
    this.cryptoDataService.getSearchData(this.searchBar)
    console.log(this.notLoading)
    setTimeout(() => {
      this.notLoading = true
      console.log(this.notLoading)
    }, 2750)
  }

  ngOnInit(): void {

    this.changeTheme('saga-orange')

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
