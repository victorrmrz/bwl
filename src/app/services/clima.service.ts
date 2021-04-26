import { Injectable, Input } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Weather {
  temp_c: number;
  condition_text: string;
  condition_img: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  private configURL: string;

  constructor(private httpClient: HttpClient) { }

  public getWeather(city: string): Observable<any> {
    console.log(city);
    this.configURL = environment.weatherURL + environment.weatherKey + '&q=' + city + '&aqi=no&lang=es';
    console.log(this.configURL);
    return this.httpClient.get<any>(this.configURL);
  }
}
