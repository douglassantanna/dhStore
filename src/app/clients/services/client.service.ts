import { Observable } from 'rxjs/internal/Observable';
import { ViewClient } from './../interfaces/iclient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url = `${environment.urlApi}/clients`;

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<ViewClient[]>{
    return this.http.get<ViewClient[]>(url)
  }
}
