import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Town } from './town';

@Injectable()
export class TownService {
  
  private URL = "http://lpa2sgadot.herokuapp.com/towns"
  //private URL = "https://projet-thoory-lpa2.herokuapp.com/towns"
  
  constructor(private http: HttpClient) { }

  getTown(id : number) : Observable<Town> {
    return this.http.get<Town>(`${this.URL}/${id}.json`);
  }
}
