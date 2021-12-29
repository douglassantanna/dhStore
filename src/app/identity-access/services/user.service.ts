import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { NewUser, UpdateUser, ViewUser } from '../interfaces/iusers';
const url = `${environment.urlApi}/users`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ViewUser[]> {
    return this.http.get<ViewUser[]>(url);
  }
  createUser(newUser: NewUser): Observable<NewUser>{
    return this.http.post<NewUser>(url, newUser);
  }
  updateUser(updateUser: UpdateUser): Observable<any> {
    return this.http.put(`${url}/${updateUser.id}`, updateUser);
  }
  deleteUser(id: ViewUser): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }
}
