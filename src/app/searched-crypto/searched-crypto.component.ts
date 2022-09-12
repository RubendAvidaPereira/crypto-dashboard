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

  constructor(private searchedContent: CryptoDataService) { }

  ngOnInit(): void {
    
  }

}
