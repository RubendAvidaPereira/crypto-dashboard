// Main Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Application Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { EthereumComponent } from './ethereum/ethereum.component';
import { SearchedCryptoComponent } from './searched-crypto/searched-crypto.component';
import { FooterComponent } from './footer/footer.component';

// Styling with PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { TabViewModule } from 'primeng/tabview';
import { KnobModule } from 'primeng/knob';
import { FormsModule } from '@angular/forms';
import { TimelineModule } from 'primeng/timeline';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ProgressBarModule } from 'primeng/progressbar';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ChipModule } from 'primeng/chip';


@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    DashboardComponent,
    BitcoinComponent,
    EthereumComponent,
    SearchedCryptoComponent,
    FooterComponent
  ],
  imports: [
    // Required Modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Styling Modules
    ButtonModule,
    RippleModule,
    MenubarModule,
    CardModule,
    TableModule,
    ChartModule,
    TabViewModule,
    KnobModule,
    FormsModule,
    TimelineModule,
    ScrollPanelModule,
    ProgressBarModule,
    DividerModule,
    InputTextModule,
    TooltipModule,
    ProgressSpinnerModule,
    ChipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
