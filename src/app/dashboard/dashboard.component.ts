import { Component, OnInit } from '@angular/core';
import { ThemeChangeService } from '../shared/services/theme-change.service';
import { CryptoDataService } from '../shared/services/crypto-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // General Data
  lastDayData: any
  latestData: any
  show: boolean = false

  // Chart Data from HTTP requests
  btcData: any
  ethData: any
  adaData: any
  dotData: any
  
  // Datasets
  _btcData: any
  _ethData: any
  _adaData: any
  _dotData: any
  _marketCapData: any

  options: any // Used to define the options on the chart

  // Get - Last Day Data
  getLastDayData() {
    this.dataService.getCryptocurrenciesData({ currencies: 'BTC,ETH,ADA,DOT', interval: '1d', convert: 'EUR'}).subscribe(
      (response) => {
        this.lastDayData = response
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  // Get - Latest 50 top Cryptocurrencies data
  getLatestData() {
    this.dataService.getCryptocurrenciesData({ interval: '1d', convert: 'EUR', perpage: '50' }).subscribe(
      (response) => {
        this.latestData = response
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  // Get - BTC data
  getBTCData() {
    this.dataService.getCryptocurrenciesData({ currencies: 'BTC', interval: '1d,7d,30d,365d', convert: 'EUR'}).subscribe(
      (response) => {
          this.btcData = response
          console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  // Get - ETH data
  getETHData() {
    this.dataService.getCryptocurrenciesData({ currencies: 'ETH', interval: '1d,7d,30d,365d', convert: 'EUR'}).subscribe(
      (response) => {
          this.ethData = response
          console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  // Get - ADA data
  getADAData() {
    this.dataService.getCryptocurrenciesData({ currencies: 'ADA', interval: '1d,7d,30d,365d', convert: 'EUR'}).subscribe(
      (response) => {
          this.adaData = response
          console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  // Get - DOT data
  getDOTData() {
    this.dataService.getCryptocurrenciesData({ currencies: 'DOT', interval: '1d,7d,30d,365d', convert: 'EUR'}).subscribe(
      (response) => {
          this.dotData = response
          console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  // Draw BTC Chart
  drawBTCChart() {
    this._btcData = {
      labels: ["365 Days", "30 Days", "7 Days", "1 Days"],
      datasets: [
        {
          label: 'Price Change',
          borderColor: "#0998e5",
          tension: .4,
          data: [ this.btcData[0]["365d"].price_change, 
            this.btcData[0]["30d"].price_change, 
            this.btcData[0]["7d"].price_change, 
            this.btcData[0]["1d"].price_change 
          ]
        },
        {
          label: 'Price Change %',
          borderColor: "#25b20c",
          tension: .4,
          data: [ this.btcData[0]["365d"].price_change_pct * 100, 
            this.btcData[0]["30d"].price_change_pct * 100, 
            this.btcData[0]["7d"].price_change_pct * 100, 
            this.btcData[0]["1d"].price_change_pct * 100 
          ]
        }
      ]
    }
  }

  // Draw ETH Chart
  drawETHChart() {
    this._ethData = {
      labels: ["365 Days", "30 Days", "7 Days", "1 Days"],
      datasets: [
        {
          label: 'Price Change',
          borderColor: "#0998e5",
          tension: .4,
          data: [ this.ethData[0]["365d"].price_change, 
            this.ethData[0]["30d"].price_change, 
            this.ethData[0]["7d"].price_change, 
            this.ethData[0]["1d"].price_change 
          ]
        },
        {
          label: 'Price Change %',
          borderColor: "#25b20c",
          tension: .4,
          data: [ this.ethData[0]["365d"].price_change_pct * 100, 
            this.ethData[0]["30d"].price_change_pct * 100, 
            this.ethData[0]["7d"].price_change_pct * 100, 
            this.ethData[0]["1d"].price_change_pct * 100 
          ]
        }
      ]
    }
  }

  // Draw ADA Chart
  drawADAChart() {
    this._adaData = {
      labels: ["365 Days", "30 Days", "7 Days", "1 Days"],
      datasets: [
        {
          label: 'Price Change',
          borderColor: "#0998e5",
          tension: .4,
          data: [ this.adaData[0]["365d"].price_change, 
            this.adaData[0]["30d"].price_change, 
            this.adaData[0]["7d"].price_change, 
            this.adaData[0]["1d"].price_change 
          ]
        },
        {
          label: 'Price Change %',
          borderColor: "#25b20c",
          tension: .4,
          data: [ this.adaData[0]["365d"].price_change_pct * 100, 
            this.adaData[0]["30d"].price_change_pct * 100, 
            this.adaData[0]["7d"].price_change_pct * 100, 
            this.adaData[0]["1d"].price_change_pct * 100 
          ]
        }
      ]
    }
  }

  // Draw DOT Chart
  drawDOTChart() {
    this._dotData = {
      labels: ["365 Days", "30 Days", "7 Days", "1 Days"],
      datasets: [
        {
          label: 'Price Change',
          borderColor: "#0998e5",
          tension: .4,
          data: [ this.dotData[0]["365d"].price_change, 
            this.dotData[0]["30d"].price_change, 
            this.dotData[0]["7d"].price_change, 
            this.dotData[0]["1d"].price_change 
          ]
        },
        {
          label: 'Price Change %',
          borderColor: "#25b20c",
          tension: .4,
          data: [ this.dotData[0]["365d"].price_change_pct * 100, 
            this.dotData[0]["30d"].price_change_pct * 100, 
            this.dotData[0]["7d"].price_change_pct * 100, 
            this.dotData[0]["1d"].price_change_pct * 100 
          ]
        }
      ]
    }
  }

  drawMarketCapChart() {
  this._marketCapData = {
    labels: ['Bitcoin','Ethereum','Cardano', 'Polkadot'],
      datasets: [
        {
            data: [this.btcData[0].market_cap, this.ethData[0].market_cap, this.adaData[0].market_cap, this.dotData[0].market_cap],
            backgroundColor: [
                "#42A5F5",
                "#66BB6A",
                "#FFA726",
                "#9f40e8"
            ],
            hoverBackgroundColor: [
                "#64B5F6",
                "#81C784",
                "#FFB74D",
                '#8434c1'
            ]
        }
      ]
    }
  }

  constructor(
    private dataService: CryptoDataService,
    private themeService: ThemeChangeService
  ) { }

  // On Init
  ngOnInit(): void {
    
    this.options = this.themeService.options

    /**
     *  Sleeping 1,5 Second and 1 second after each consecutive request 
     *  Bypassing the API 1rps (Request per Second)
     *  For each Get request the corresponding chart is drawn
     */

    this.getBTCData()
    setTimeout(() => {
      this.getLastDayData()
    }, 1500)

    setTimeout(() => {
      this.getLatestData()
    }, 3000)

    setTimeout(() => {
      this.getETHData()
    }, 4500)

    setTimeout(() => {
      this.drawETHChart()
    }, 6000)

    setTimeout(() => {
      this.getADAData()    
    }, 7500)
  
    setTimeout(() => {
      this.getDOTData()
    }, 9000)

    // After data is loaded correctly, charts are drawn
    setTimeout(() => {
      this.drawBTCChart()
      this.drawETHChart()
      this.drawADAChart()
      this.drawDOTChart()
      this.drawMarketCapChart()
      this.show = true
    }, 10000)
  }
}
