import { ClimaService, Weather } from './../../services/clima.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {

  @Input() city;
  weather: Weather = {
    temp_c: null,
    condition_text: "--",
    condition_img: null,
    location: "Recuperando información"
  };

  constructor(private climaService: ClimaService) { }


  ngOnInit(): void {
    this.getWeather(this.city ? this.city : 'Mexico City');
  }

  getWeather(city: string) {
    this.climaService.getWeather(city).subscribe(data => {
      console.log(data);
      this.weather = {
        temp_c: data.current.temp_c,
        condition_text: data.current.condition.text,
        condition_img: data.current.condition.icon,
        location: data.location.name
      }
    })
  }

}
