import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzadataService {
  dataUrl = "http://files.olo.com/pizzas.json";
  constructor(private _http: HttpClient) { }

  getPizzaOrders()  {
    console.log("url", `${this.dataUrl}`);
    
    return this._http.get(`${this.dataUrl}`);
  }
}
