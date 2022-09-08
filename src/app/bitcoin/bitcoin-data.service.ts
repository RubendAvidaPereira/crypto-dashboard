import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BitcoinDataService {

  constructor(private http: HttpClient) { }

  // Crypto Dashboard API - Nomics
  apiKey: string = '96aac8178a49a4b0799bcff7c0cd5cfbc268dcea'
  apiURL: string = `https://api.nomics.com/v1/currencies/ticker?key=${this.apiKey}`

  // Get - Bitcoin Full Data
  getBitcoinData() {
    return this.http.get(this.apiURL + '&ids=BTC&convert=EUR&interval=1d,7d,30d,365d')
  }
}
