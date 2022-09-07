import { Component, OnInit } from '@angular/core';
import { BitcoinDataService } from '../bitcoin-data.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {

  // BTC data
  btcData: any
  
  // Values 
  price_change_pct_1d: number = 0
  price_change_pct_7d: number = 0
  price_change_pct_30d: number = 0
  price_change_pct_365d: number = 0


  // Charts

  // Get - Bitcoin Data
  getBitcoinData() {
    this.btcService.getBitcoinData().subscribe(
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
      this.price_change_pct_1d = data["1d"].price_change_pct * 100
      this.price_change_pct_1d.toFixed(1)

      this.price_change_pct_7d = data["7d"].price_change_pct * 100
      this.price_change_pct_7d.toFixed(1)

      this.price_change_pct_30d = data["30d"].price_change_pct * 100
      this.price_change_pct_30d.toFixed(1)

      this.price_change_pct_365d = data["365d"].price_change_pct * 100
      this.price_change_pct_365d.toFixed(1)
    }
  }

  constructor(private btcService: BitcoinDataService) { }

  ngOnInit(): void {
    this.getBitcoinData()
    setTimeout(() => {
      this.createValues()
    }, 1500)
    
  }

}
