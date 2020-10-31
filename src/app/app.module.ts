import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MaterialModule } from './shared/modules/material.module';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { HistoryComponent } from './history/history.component';
import { LangBarComponent } from './shared/components/lang-bar/lang-bar.component';
import {HttpClientModule} from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { WeatherCardComponent } from './shared/components/weather-card/weather-card.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherWidgetComponent,
    HistoryComponent,
    LangBarComponent,
    WeatherCardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        MatListModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
