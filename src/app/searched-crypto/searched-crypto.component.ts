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
  price_change_pct_1d: any[] = []
  price_change_pct_7d: any[] = []
  price_change_pct_30d: any[] = []
  price_change_pct_365d: any[] = []
  show: boolean = false

  // Charts
  _searched: any[] = []
  options: any

  drawSearchedChart() {
    for (let search of this.searched){
      this._searched.push({
        labels: ["365 Days", "30 Days", "7 Days", "1 Days"],
        datasets: [
          {
            label: 'Market Cap Change %',
            borderColor: "#0998e5",
            tension: .4,
            data: [ search["365d"].market_cap_change_pct * 100, 
              search["30d"].market_cap_change_pct * 100, 
              search["7d"].market_cap_change_pct * 100, 
              search["1d"].market_cap_change_pct * 100 
            ]
          },
          {
            label: 'Price Change %',
            borderColor: "#25b20c",
            tension: .4,
            borderDash: [3, 3],
            data: [ search["365d"].price_change_pct * 100, 
              search["30d"].price_change_pct * 100, 
              search["7d"].price_change_pct * 100, 
              search["1d"].price_change_pct * 100 
            ]
          },
          {
            label: 'Volume Change %',
            borderColor: "#e09900",
            tension: .4,
            data: [ search["365d"].volume_change_pct * 100, 
              search["30d"].volume_change_pct * 100, 
              search["7d"].volume_change_pct * 100, 
              search["1d"].volume_change_pct * 100 
            ]
          }
        ]
      })
    }
    
  }

  // Create values
  createValues() {
    for (let data of this.searched){
      this.price_change_pct_1d.push((data["1d"].price_change_pct * 100).toFixed(2))

      this.price_change_pct_7d.push((data["7d"].price_change_pct * 100).toFixed(2))

      this.price_change_pct_30d.push((data["30d"].price_change_pct * 100).toFixed(2))

      this.price_change_pct_365d.push((data["365d"].price_change_pct * 100).toFixed(2))
    }
  }

  ngOnInit(): void {
    this.options = this.themeService.options
    this.searched = this.dataService.searched
    console.log(this.searched)

    // Draw Chart
    setTimeout(() => {
      this.createValues()
      this.drawSearchedChart()
      this.show = true
    }, 1500)
  }

}
