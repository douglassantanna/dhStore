import { Observable } from 'rxjs/internal/Observable';
import { NewClient, ViewClient, UpdateClient } from './../interfaces/iclient';
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
  createClient(newClient: NewClient): Observable<NewClient>{
    return this.http.post<NewClient>(url, newClient);
  }
  updateClient(updateClient: UpdateClient): Observable<any> {
    return this.http.put(`${url}/${updateClient.id}`, updateClient);
  }
  deleteClient(id: ViewClient): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }
}
