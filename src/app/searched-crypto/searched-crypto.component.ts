import { Component, OnInit } from '@angular/core';
import { CryptoDataService } from '../shared/services/crypto-data.service';
import { ThemeChangeService } from '../shared/services/theme-change.service';

@Component({
  selector: 'app-searched-crypto',
  templateUrl: './searched-crypto.component.html',
  styleUrls: ['./searched-crypto.component.css']
})
export class SearchedCryptoComponent implements OnInit {

  // Searched Content
  searched: any

  constructor(
    private dataService: CryptoDataService,
    private themeService: ThemeChangeService) { }

  // Values 
  price_change_pct_1d: string[] = []
  price_change_pct_7d: string[] = []
  price_change_pct_30d: string[] = []
  price_change_pct_365d: string[] = []
  show: boolean = false

  // Charts
  _searched: any[] = []
  options: any

  ngOnInit(): void {

    // Chart Options
    this.options = this.themeService.options

    // Data
    this.searched = this.dataService.searched

    setTimeout(() => {
      
      // Values
      let values = this.dataService.createValues(this.searched)
      this.price_change_pct_1d = (Object(values)["one_day"])
      this.price_change_pct_7d = (Object(values)["seven_days"])
      this.price_change_pct_30d = (Object(values)["monthly"])
      this.price_change_pct_365d = (Object(values)["yearly"])

      //  Chart
      this._searched = this.dataService.drawChart(this.searched, 'searched-component')
      this.show = true
    }, 1500)
  }

}
