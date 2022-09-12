import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CryptoDataService {

  constructor(private http: HttpClient) { }

  // Crypto Dashboard API - Nomics
  apiKey: string = '96aac8178a49a4b0799bcff7c0cd5cfbc268dcea'
  apiURL: string = `https://api.nomics.com/v1/currencies/ticker?key=${this.apiKey}`

  // Search Bar - Data Singleton Store
  searched: any

  /**
   * Function that handles the searched query on the search bar, in the app-menu component.
   * It returns the corresponding data for the searched text.
   * @param searchText String received from the search bar in app-menu component
   */
  getSearchData(searchText: string){
    let searchParams = searchText.split(" ")
    
    // Capitalize parameters
    let _currency = searchParams[0].toUpperCase()
    let _convert = searchParams[2].toUpperCase()

    switch (searchParams.length){
      case 1: // ----------------------------------------- 1 Parameter
        this.getCryptocurrenciesData({
          currencies: _currency
        }).subscribe(
          (response) => {
            this.searched = response
          },
          (error) => console.warn("Error - Search Params Wrong\n" + error)
        )
        break
      case 2: // ----------------------------------------- 2 Parameters
        this.getCryptocurrenciesData({
          currencies: _currency,
          interval: searchParams[1]
        }).subscribe(
          (response) => {
            this.searched = response
          },
          (error) => console.warn("Error - Search Params Wrong\n" + error)
        )
        break
      case 3: // ----------------------------------------- 3 Parameters
        this.getCryptocurrenciesData({
          currencies: _currency,
          interval: searchParams[1],
          convert: _convert
        }).subscribe(
          (response) => {
            this.searched = response
          },
          (error) => console.warn("Error - Search Params Wrong\n" + error)
        )
        break
      case 4: // ----------------------------------------- 4 Parameters
        this.getCryptocurrenciesData({
          currencies: _currency,
          interval: searchParams[1],
          convert: _convert,
          perpage: searchParams[3]
        }).subscribe(
          (response) => {
            this.searched = response
          },
          (error) => console.warn("Error - Search Params Wrong\n" + error)
        )
        break
    }
  }

  /** Get - Crypto Data
   * 
   * @param currencies Comma separated list of cryptocurrencies IDs. (BTC,ETH,ADA,DOT),
   * @param interval Comma separated time interval (1d,7d,30d,365d,ytd),
   * @param convert Can convert the quote prices to fiat or cryptocurrency (EUR or USD - default convert),
   * @param perpage The maximum number of items to return per paginated response,
   * @returns Json response with the corresponding query.
   */
  getCryptocurrenciesData({ currencies, interval, convert, perpage }: { currencies?: string; interval?: string; convert?: string; perpage?: string; } = {}) {
  
    // 1 PARAMETER UNDEFINED
    // If currencies is undefined
    if (interval !== undefined && convert !== undefined && perpage !== undefined){
      return this.http.get(this.apiURL + `&interval=${interval}&per-page=${perpage}&convert=${convert}`)
    }

    // If perpage is undefined
    else if (currencies !== undefined && interval !== undefined && convert !== undefined){
      return this.http.get(this.apiURL + `&ids=${currencies}&interval=${interval}&convert=${convert}`)
    }

    // If convert is undefined
    else if (currencies !== undefined && interval !== undefined && perpage !== undefined){
      return this.http.get(this.apiURL + `&ids=${currencies}&interval=${interval}&per-page=${perpage}`)
    }

    // If interval is undefined
    else if (currencies !== undefined && convert !== undefined && perpage !== undefined){
      return this.http.get(this.apiURL + `&ids=${currencies}&convert=${convert}&per-page=${perpage}`)
    }
    // ---------------------------------------------------------------------------------------------------

    // 2 PARAMETERS UNDEFINED
    // If currencies and interval are undefined
    else if (convert !== undefined && perpage !== undefined){
      return this.http.get(this.apiURL + `&convert=${convert}&per-page=${perpage}`)
    }

    // If currencies and convert are undefined
    else if (interval !== undefined && perpage !== undefined){
      return this.http.get(this.apiURL + `&interval=${interval}&per-page=${perpage}`)
    }

    // If currencies and perpage are undefined
    else if (interval !== undefined && convert !== undefined){
      return this.http.get(this.apiURL + `&interval=${interval}&convert=${convert}`)
    }

    // If perpage and interval are undefined
    else if (currencies !== undefined && convert !== undefined){
      return this.http.get(this.apiURL + `&ids=${currencies}&convert=${convert}`)
    }

    // If perpage and convert are undefined
    else if (currencies !== undefined && interval !== undefined){
      return this.http.get(this.apiURL + `&ids=${currencies}&interval=${interval}`)
    }

    // If interval and convert are undefined
    else if (currencies !== undefined && perpage !== undefined){
      return this.http.get(this.apiURL + `&ids=${currencies}&per-page=${perpage}`)
    }
    // ----------------------------------------------------------------------------------------------------

    // 3 PARAMETERS UNDEFINED
    // If currencies, interval and convert are undefined
    else if (perpage !== undefined){
      return this.http.get(this.apiURL + `&per-page=${perpage}`)
    }

    // If currencies, interval and perpage are undefined
    else if (convert !== undefined){
      return this.http.get(this.apiURL + `&convert=${convert}`)
    }

    // If interval, convert and perpage are undefined
    else if (currencies !== undefined){
      return this.http.get(this.apiURL + `&ids=${currencies}`)
    }

    // If currencies, convert and perpage are undefined
    else if (interval !== undefined){
      return this.http.get(this.apiURL + `&interval=${interval}`)
    }
    // ----------------------------------------------------------------------------------------------------

    // ALL PARAMETERS
    else if (currencies !== undefined && interval !== undefined && convert !== undefined && perpage !== undefined){
      return this.http.get(this.apiURL + `&ids=${currencies}&interval=${interval}&per-page=${perpage}&convert=${convert}`)
    }

    // Returns default response from nomics
    return this.http.get(this.apiURL)

  }
}
