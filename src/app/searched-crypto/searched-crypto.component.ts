import { Component, OnInit } from '@angular/core';
import { CryptoDataService } from '../shared/services/crypto-data.service';

@Component({
  selector: 'app-searched-crypto',
  templateUrl: './searched-crypto.component.html',
  styleUrls: ['./searched-crypto.component.css']
})
export class SearchedCryptoComponent implements OnInit {

  // Searched Content
  searched: any

  constructor(private dataService: CryptoDataService) { }

  // Values 
  price_change_pct_1d: string = ''
  price_change_pct_7d: string = ''
  price_change_pct_30d: string = ''
  price_change_pct_365d: string = ''
  show: boolean = false

  // Charts
  _searched: any
  options: any

  drawSearchedChart() {
    this._searched = {
      labels: ["365 Days", "30 Days", "7 Days", "1 Days"],
      datasets: [
        {
          label: 'Market Cap Change %',
          borderColor: "#0998e5",
          tension: .4,
          data: [ this.searched[0]["365d"].market_cap_change_pct * 100, 
            this.searched[0]["30d"].market_cap_change_pct * 100, 
            this.searched[0]["7d"].market_cap_change_pct * 100, 
            this.searched[0]["1d"].market_cap_change_pct * 100 
          ]
        },
        {
          label: 'Price Change %',
          borderColor: "#25b20c",
          tension: .4,
          borderDash: [3, 3],
          data: [ this.searched[0]["365d"].price_change_pct * 100, 
            this.searched[0]["30d"].price_change_pct * 100, 
            this.searched[0]["7d"].price_change_pct * 100, 
            this.searched[0]["1d"].price_change_pct * 100 
          ]
        },
        {
          label: 'Volume Change %',
          borderColor: "#e09900",
          tension: .4,
          data: [ this.searched[0]["365d"].volume_change_pct * 100, 
            this.searched[0]["30d"].volume_change_pct * 100, 
            this.searched[0]["7d"].volume_change_pct * 100, 
            this.searched[0]["1d"].volume_change_pct * 100 
          ]
        }
      ]
    }
  }

  // Create values
  createValues() {
    for (let data of this.searched){
      this.price_change_pct_1d = (data["1d"].price_change_pct * 100).toFixed(2)

      this.price_change_pct_7d = (data["7d"].price_change_pct * 100).toFixed(2)

      this.price_change_pct_30d = (data["30d"].price_change_pct * 100).toFixed(2)

      this.price_change_pct_365d = (data["365d"].price_change_pct * 100).toFixed(2)
    }
  }

  ngOnInit(): void {
    this.searched = this.dataService.searched

    this.createValues()
    // Draw Chart
    setTimeout(() => {
      this.drawSearchedChart()
      this.show = true
    }, 3000)
  }

}
