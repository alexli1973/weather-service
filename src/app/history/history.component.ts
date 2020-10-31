import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../shared/services/history.service';
import { WeatherData } from '../shared/models/components';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  weatherData: WeatherData[];

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.weatherData = this.historyService.getWeatherData();
  }

  shareWeatherData(weatherData: WeatherData) {
    this.historyService.nextWeatherData(weatherData);
  }
}
