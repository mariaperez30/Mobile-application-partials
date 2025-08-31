import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private baseUrl = 'https://countriesnow.space/api/v0.1';

  constructor(private http: HttpClient) {}

  // Obtener lista de países
  getCountries(): Observable<any> {
    return this.http.get(`${this.baseUrl}/countries`);
  }

  // Obtener ciudades de un país
  getCities(country: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/countries/cities`, { country });
  }
}
