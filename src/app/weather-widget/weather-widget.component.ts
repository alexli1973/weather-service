import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {debounceTime, map, startWith, switchMap} from 'rxjs/operators';

import { ApiService } from '../shared/services/api.service';
import { City, WeatherData } from '../shared/models/components';
import {HistoryService} from '../shared/services/history.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit, OnDestroy {
  control = new FormControl();
  citiesList: City[];
  currentCityName: string;
  currentCityObj: City;
  weatherData: WeatherData;
  isDisabled = true;

  historyData: any;
  historySubsc: Subscription = new Subscription();

  constructor(
    private apiService: ApiService,
    private historyService: HistoryService,
  ) { }



  ngOnInit(): void {
    this.control
      .valueChanges
      .pipe(
        debounceTime(1000),
      ).subscribe(
    term => {
          if (term.length >= 3) {
            this.apiService.getCitiesList(term).subscribe(list => {
              this.citiesList = list;
            });
          }
      });

    this.historySubsc.add(this.historyService.sharedWeatherData.subscribe(data => {
      this.historyData = data;
    }));

  }

  ngOnDestroy(): void {
    this.historySubsc.unsubscribe();
  }

  getCurrentCityName(city) {
    this.currentCityName = city;
    this.currentCityObj = this.getCurrentCityId(city);
    this.isDisabled = false;
  }

  getCurrentCityId(name) {
    if (name && this.citiesList) {
     return this.citiesList.find(el => el.name === name);
    }
  }

  getWeatherData() {
    this.apiService.getWeatherData(this.currentCityObj.id).subscribe(data => {
      this.weatherData = data;
      this.historyService.setWeatherData(data);
    });
  }
}
