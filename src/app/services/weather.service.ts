import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private _apiKey = 'fbDD7eX1ygxhwwQM0J6DoNEfX2ym7Pba';

  constructor(private httpClient: HttpClient) {}

  public getWeatherDetailsForMyCity(city: string): Observable<any> {
    const url = `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${this._apiKey}&units=metric`;

    return this.httpClient.get(url).pipe(map((response) => response));
  }
}
