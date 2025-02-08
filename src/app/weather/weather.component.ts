import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { WeatherForecast } from '../weather-forecast';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {
  forecasts: WeatherForecast[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getForecasts(); // Ensure this is called when the component loads
  }

  getForecasts() {
    this.http.get<WeatherForecast[]>(`${environment.baseUrl}/weatherforecast`)
      .subscribe({
        next: (result) => {
          console.log('Weather Data:', result);
          this.forecasts = result;
        },
        error: (err) => {
          console.error('Error fetching weather data:', err);
        }
      });
  }
}