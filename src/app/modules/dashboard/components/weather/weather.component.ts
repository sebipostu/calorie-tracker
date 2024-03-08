import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  // public weatherData$ =
  //   this.weatherApiService.getWeatherDetailsForMyCity('Bucharest');
  constructor(private weatherApiService: WeatherService) {}

  ngOnInit() {}
}
