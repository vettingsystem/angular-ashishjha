import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  private countriesList: any;
  public getAllCountriesDetails(): any {

 return   this.http.get("https://restcountries.eu/rest/v2/all").pipe(map(res => {
 return   this.countriesList = res;
    }));

  }

}


