import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { filter } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class WeatherComponent {
  public weatherData$ = this.weatherApiService
    .getWeatherDetailsForMyCity('Bucharest')
    .pipe(filter((data) => !!data));
  constructor(private weatherApiService: WeatherService) {}
}
