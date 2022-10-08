import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { QuoteInputComponent } from './quote-input/quote-input.component';
import { ErrorComponent } from './error/error.component';
import { GridsComponent } from './grids/grids.component';
import { UpperGridComponent } from './upper-grid/upper-grid.component';
import { LowerGridComponent } from './lower-grid/lower-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    QuoteInputComponent,
    ErrorComponent,
    GridsComponent,
    UpperGridComponent,
    LowerGridComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
