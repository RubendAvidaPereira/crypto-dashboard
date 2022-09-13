import { Component, OnInit } from '@angular/core';
import { ThemeChangeService } from '../shared/services/theme-change.service';
import { CryptoDataService } from '../shared/services/crypto-data.service';

@Component({
  selector: 'app-ethereum',
  templateUrl: './ethereum.component.html',
  styleUrls: ['./ethereum.component.css']
})

export class EthereumComponent implements OnInit {

  //  ETH Data
  ethData: any

  // Chart
  _ethData: any
  options: any

  // Values
  price_change_pct_1d: string = ''
  price_change_pct_7d: string = ''
  price_change_pct_30d: string = ''
  price_change_pct_365d: string = ''
  show: boolean = false
  
  constructor(
    private themeChange: ThemeChangeService,
    private dataService: CryptoDataService
  ) { }

  // Get - Ethereum data
  getETHData() {
    this.dataService.getCryptocurrenciesData({ currencies: "ETH", interval: "1d,7d,30d,365d", convert: "EUR" }).subscribe(
      (response) => {
        this.ethData = response
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
    
    // Chart Options
    this.options = this.themeChange.options

    // Get - data
    this.getETHData()
    
    setTimeout(() => {

      // Values
      let values = this.dataService.createValues(this.ethData)
      this.price_change_pct_1d = Object(values)["one_day"]
      this.price_change_pct_7d = Object(values)["seven_days"]
      this.price_change_pct_30d = Object(values)["monthly"]
      this.price_change_pct_365d = Object(values)["yearly"]

      // Chart
      this._ethData = this.dataService.drawChart(this.ethData, 'ethereum-component')
      this.show = true
    }, 1500)
  }

}
