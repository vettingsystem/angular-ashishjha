import { CountriesService } from './countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public countriesList: any;
  constructor(private countriesService: CountriesService ) { }

  ngOnInit() {
    this.countriesService.getAllCountriesDetails()
      .subscribe(arg => this.countriesList = arg);
    }

}
