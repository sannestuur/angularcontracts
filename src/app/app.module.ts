import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ContractPartijenContainerComponent } from './contract-partijen-container/contract-partijen-container.component';
import { ContractPartijenTableComponent } from './contract-partijen-table/contract-partijen-table.component';
import { FilterComponent } from './filter/filter.component';
import { BewerkenComponent } from './bewerken/bewerken.component';

@NgModule({
  declarations: [
    AppComponent,
    ContractPartijenContainerComponent,
    ContractPartijenTableComponent,
    FilterComponent,
    BewerkenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
