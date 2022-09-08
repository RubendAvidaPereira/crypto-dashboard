import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EthereumComponent } from './ethereum/ethereum.component';

const routes: Routes = [
  // Here are specified the paths for the application
  { path: "", redirectTo: "dashboard", pathMatch: 'full' },
  { path: "dashboard", component: DashboardComponent },
  { path: "bitcoinInfo", component: BitcoinComponent },
  { path: "ethereumInfo", component: EthereumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
