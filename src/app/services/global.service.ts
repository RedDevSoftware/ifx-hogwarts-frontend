import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import 'rxjs/operators';
import { PersonHogwarts } from '../models/personHogwarts.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private serviceUrl = 'http://hp-api.herokuapp.com/api/characters/';

  constructor(private http: HttpClient) { }
  
  getTeacher() {
    return this.http.get<PersonHogwarts[]>(this.serviceUrl + 'staff');
  }
  
  getStudent() {
    return this.http.get<PersonHogwarts[]>(this.serviceUrl + 'students');
  }
  
  getStudentByHouse(house: string) {
    return this.http.get<PersonHogwarts[]>(this.serviceUrl + `house/${house}`);
  }

}
