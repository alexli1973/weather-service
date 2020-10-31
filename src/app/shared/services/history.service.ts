import { Injectable } from '@angular/core';
import { WeatherData } from '../models/components';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private weatherData: WeatherData[] = [];
  // sharedWeatherData: WeatherData;

  // share data by click start
  private sharedWeatherSubj = new BehaviorSubject({});
  sharedWeatherData = this.sharedWeatherSubj.asObservable();
  // share data by click end

  constructor() { }

  getWeatherData(): WeatherData[] {
    return this.weatherData;
  }
  setWeatherData(data: WeatherData) {
    if (this.weatherData.length === 5) {
      this.weatherData.shift();
    }
    this.weatherData.push(data);
  }


  nextWeatherData(data: WeatherData) {
    this.sharedWeatherSubj.next(data);
  }

  shareWeatherData(data: WeatherData) {
    // this.sharedWeatherData = data;
  }

  getSharedWeatherData() {
    // return this.sharedWeatherData;
  }
}
