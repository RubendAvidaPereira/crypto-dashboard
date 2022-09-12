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

  drawBTCChart() {
    this._btcData = {
      labels: ["365 Days", "30 Days", "7 Days", "1 Days"],
      datasets: [
        {
          label: 'Market Cap Change %',
          borderColor: "#0998e5",
          tension: .4,
          data: [ this.btcData[0]["365d"].market_cap_change_pct * 100, 
            this.btcData[0]["30d"].market_cap_change_pct * 100, 
            this.btcData[0]["7d"].market_cap_change_pct * 100, 
            this.btcData[0]["1d"].market_cap_change_pct * 100 
          ]
        },
        {
          label: 'Price Change %',
          borderColor: "#25b20c",
          tension: .4,
          borderDash: [3, 3],
          data: [ this.btcData[0]["365d"].price_change_pct * 100, 
            this.btcData[0]["30d"].price_change_pct * 100, 
            this.btcData[0]["7d"].price_change_pct * 100, 
            this.btcData[0]["1d"].price_change_pct * 100 
          ]
        },
        {
          label: 'Volume Change %',
          borderColor: "#e09900",
          tension: .4,
          data: [ this.btcData[0]["365d"].volume_change_pct * 100, 
            this.btcData[0]["30d"].volume_change_pct * 100, 
            this.btcData[0]["7d"].volume_change_pct * 100, 
            this.btcData[0]["1d"].volume_change_pct * 100 
          ]
        }
      ]
    }
  }

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

  // Create values
  createValues() {
    for (let data of this.btcData){
      this.price_change_pct_1d = (data["1d"].price_change_pct * 100).toFixed(2)

      this.price_change_pct_7d = (data["7d"].price_change_pct * 100).toFixed(2)

      this.price_change_pct_30d = (data["30d"].price_change_pct * 100).toFixed(2)

      this.price_change_pct_365d = (data["365d"].price_change_pct * 100).toFixed(2)
    }
  }

  constructor(
    private dataService: CryptoDataService,
    private themeChange: ThemeChangeService) { }

  ngOnInit(): void {

    this.options = this.themeChange.options

    // Get - data
    this.getBitcoinData()
    setTimeout(() => {
      this.createValues()
    }, 1500)

    // Draw Chart
    setTimeout(() => {
      this.drawBTCChart()
      this.show = true
    }, 3000)
    
  }

}
