import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {catchError, debounce, debounceTime, map} from 'rxjs/operators';
import {City} from '../models/components';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
  private apiKey = environment.apiKey;
  private lang = 'en';
  private units = 'metric';
  constructor(private httpClient: HttpClient) { }

  getCitiesList(str): Observable<City[]> {
    return this.httpClient.get('assets/data/city.list.json').pipe(
      map((list: City[]) => {
        return list.filter(city => city.name.toLowerCase().startsWith(str));
    }));
  }

  getWeatherData(cityId): Observable<any> {
    const params = new HttpParams({
      fromString: `id=${cityId}&lang=${this.lang}&units=${this.units}&appid=${this.apiKey}`
    });
    return this.httpClient.get(`${this.baseUrl}`, {params})
      .pipe(map((dataObj: any) => {
        const main = dataObj.main;
        const weather = dataObj.weather[0];
        return {
          temp: main.temp,
          humidity: main.humidity,
          pressure: main.pressure,
          category: weather.main,
          icon: `http://openweathermap.org/img/wn/${weather.icon}@4x.png`,
          city: {
            id: dataObj.id,
            name: dataObj.name
          }
        };
      }));
  }

}
