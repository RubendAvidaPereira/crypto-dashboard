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

  // Get - Function to retrieve data from Data Service
  getData(currency?: string, interval?: string, convert?: string, perpage?: string) {
    this.dataService.getCryptocurrenciesData({ 
      currencies: currency, 
      interval: interval, 
      convert: convert, 
      perpage: perpage}).subscribe({
        next: (value) => { 
          switch (currency) {
            case undefined:
              this.latestData = value
              break
            case 'BTC':
              this.btcData = value
              break
            case 'ETH':
              this.ethData = value
              break
            case 'ADA':
              this.adaData = value
              break
            case 'DOT':
              this.dotData = value
              break
            default:
              this.lastDayData = value
              break
          }
        },
        error: (error) => console.warn('Error occurred while retrieving data!\n' + error),
        complete: () => console.info('Get Data Complete!')
      }
    )
  }

  drawMarketCapChart() : void {
  this._marketCapData = {
    labels: ['Bitcoin','Ethereum','Cardano', 'Polkadot'],
      datasets: [
        {
          data: [this.btcData[0].market_cap, 
            this.ethData[0].market_cap, 
            this.adaData[0].market_cap, 
            this.dotData[0].market_cap
          ],
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

  ngOnInit(): void {
    
    // Chart Options
    this.options = this.themeService.options

    /**
     *  Sleeping 1,250 Seconds after each consecutive request 
     *  Bypassing the API 1rps (Request per Second)
     */
    this.getData('BTC', '1d,7d,30d,365d', 'EUR', undefined)
    setTimeout(() => {
      this.getData('BTC,ETH,ADA,DOT', '1d', 'EUR', undefined)
    }, 1250)

    setTimeout(() => {
      this.getData(undefined, '1d', 'EUR', '50')
    }, 2500)

    setTimeout(() => {
      this.getData('ETH', '1d,7d,30d,365d', 'EUR', undefined)
    }, 3750)

    setTimeout(() => {
      this.getData('ADA', '1d,7d,30d,365d', 'EUR', undefined)    
    }, 5000)
  
    setTimeout(() => {
      this.getData('DOT', '1d,7d,30d,365d', 'EUR', undefined)
    }, 6250)

    // After data is loaded correctly, charts are drawn
    setTimeout(() => {
      let component = 'dashboard-component'
      this._btcData = this.dataService.drawChart(this.btcData, component)
      this._ethData = this.dataService.drawChart(this.ethData, component)
      this._adaData = this.dataService.drawChart(this.adaData, component)
      this._dotData = this.dataService.drawChart(this.dotData, component)
      this.drawMarketCapChart()
      this.show = true
    }, 7500)
  }
}
