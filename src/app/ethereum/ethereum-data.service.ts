import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EthereumDataService {

  // Crypto Dashboard API - Nomics
  apiKey: string = '96aac8178a49a4b0799bcff7c0cd5cfbc268dcea'
  apiURL: string = `https://api.nomics.com/v1/currencies/ticker?key=${this.apiKey}`

  constructor(private http: HttpClient) { }

  getETHData() {
    return this.http.get(this.apiURL + '&ids=ETH&convert=EUR&interval=1d,7d,30d,365d')
  }
}
