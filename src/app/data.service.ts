import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private hc: HttpClient) {}
  getAllRecepies() {
    return this.hc.get('https://dummyjson.com/recipes');
  }

  getsearchrecepies(name: any) {
    return this.hc.get(`https://dummyjson.com/recipes/search?q=${name}`);
  }
}
