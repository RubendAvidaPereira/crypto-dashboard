import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
import { ThemeChangeService } from '../theme-change.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Theme Boolean Check State
  // If false, theme is light
  checkTheme: boolean = true

  // General Data
  lastDayData: any
  latestData: any

  // Table
  cols: any

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

  options: any // Used to define the options on the chart

  // Get - Last Day Data
  getLastDayData() {
    this.httpService.getLastDayPrices().subscribe(
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
    this.httpService.getLatestData().subscribe(
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
    this.httpService.getBTCPrices().subscribe(
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
    this.httpService.getETHPrices().subscribe(
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
    this.httpService.getADAPrices().subscribe(
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
    this.httpService.getDOTPrices().subscribe(
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

  // Change Theme in Dashboard
  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
    if (theme === 'arya-orange') {
      this.checkTheme = true
    }
    else if (theme === 'saga-orange') {
      this.checkTheme = false
    }
  }

  constructor(
    private httpService: DashboardServiceService,
    private themeService: ThemeChangeService
  ) { }

  // On Init
  ngOnInit(): void {

    // Charts Options
    this.options = {
      plugins: {
        legend: {
          labels: {
            color: "#FFFFFF"
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#FFFFFF"
          },
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            color: "#FFFFFF"
          }
        }
      }
    }
    

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
    }, 10000)
  }
}
