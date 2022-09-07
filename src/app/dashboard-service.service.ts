import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DashboardServiceService {

  // Crypto Dashboard API - Nomics
  apiKey: string = '96aac8178a49a4b0799bcff7c0cd5cfbc268dcea'
  apiURL: string = `https://api.nomics.com/v1/currencies/ticker?key=${this.apiKey}`

  constructor(private http: HttpClient) { }

  // Nomics
  // Last day prices for BTC, ETH, ADA and DOT
  getLastDayPrices() {
    return this.http.get(this.apiURL + "&ids=BTC,ETH,ADA,DOT&interval=1d&convert=EUR");
  }

  // Last Day Data for top 50 Cryptocurrencies
  getLatestData() {
    return this.http.get(this.apiURL + "&per-page=50&interval=1d&convert=EUR");
  }

  // BTC prices since last year, 1d, 7d and 365d output 
  getBTCPrices() {
    return this.http.get(this.apiURL + "&ids=BTC&interval=1d,7d,30d,365d&convert=EUR");
  }

  // ETH prices since last year, 1d, 7d and 365d output 
  getETHPrices() {
    return this.http.get(this.apiURL + "&ids=ETH&interval=1d,7d,30d,365d&convert=EUR");
  }

  // ADA prices since last year, 1d, 7d and 365d output 
  getADAPrices() {
    return this.http.get(this.apiURL + "&ids=ADA&interval=1d,7d,30d,365d&convert=EUR");
  }

  // DOT prices since last year, 1d, 7d and 365d output 
  getDOTPrices() {
    return this.http.get(this.apiURL + "&ids=DOT&interval=1d,7d,30d,365d&convert=EUR");
  }
}
