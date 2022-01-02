import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ViewOrder } from 'src/app/design-system/interfaces/iorder';

const url = `${environment.urlApi}/orders`;

@Injectable({
  providedIn: 'root'
})
export class OrderService {

constructor(private http: HttpClient) { }

getOrders(): Observable<ViewOrder[]> {
  return this.http.get<ViewOrder[]>(url);
}
}
