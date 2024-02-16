import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3/';

  constructor(private http: HttpClient) { }

  getByCapital(capital: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}capital/${capital}`);
  }

  getByPais(pais: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}pais/${pais}`);
  }

  getByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}region/${region}`);
  }

}