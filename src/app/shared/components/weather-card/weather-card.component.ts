import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '../../models/components';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input()
  weatherData: WeatherData;

  @Input()
  link: boolean;

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {}

  shareWeatherData(weatherData: WeatherData) {
    this.historyService.nextWeatherData(weatherData);
  }
}
