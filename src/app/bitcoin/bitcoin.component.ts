import { Component, OnInit } from '@angular/core';
import { ThemeChangeService } from '../shared/services/theme-change.service';
import { CryptoDataService } from '../shared/services/crypto-data.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {

  // BTC data
  btcData: any
  
  // Values 
  price_change_pct_1d: string = ''
  price_change_pct_7d: string = ''
  price_change_pct_30d: string = ''
  price_change_pct_365d: string = ''
  show: boolean = false

  // Charts
  _btcData: any
  options: any

  // Get - Bitcoin Data
  getBitcoinData() {
    this.dataService.getCryptocurrenciesData({ currencies: "BTC", interval: "1d,7d,30d,365d", convert: "EUR" }).subscribe(
      (response) => {
        this.btcData = response
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  constructor(
    private dataService: CryptoDataService,
    private themeChange: ThemeChangeService
  ) { }

  ngOnInit(): void {

    // Chart Options
    this.options = this.themeChange.options

    // Get - data
    this.getBitcoinData()
    
    setTimeout(() => {
      
      // Values
      let values = this.dataService.createValues(this.btcData)
      this.price_change_pct_1d = Object(values)["one_day"]
      this.price_change_pct_7d = Object(values)["seven_days"]
      this.price_change_pct_30d = Object(values)["monthly"]
      this.price_change_pct_365d = Object(values)["yearly"]

      // Chart
      this._btcData = this.dataService.drawChart(this.btcData, 'bitcoin-component')
      this.show = true
    }, 1500)
  }
}
