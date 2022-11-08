import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {UsersModel} from "../models/users.model";


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient: HttpClient) {
  }

  getUser(userId: number):Observable<any>{
    return this.httpClient.get<any>(
      `${environment.apiUrl}/users/${userId}`
    );
  }

  createUser(body: UsersModel):Observable<UsersModel>{
    return this.httpClient.post<any>(
      `${environment.apiUrl}/users`,body
    );
  }

  updateUser(userId:number, body: UsersModel):Observable<UsersModel>{
    return this.httpClient.patch<any>(
      `${environment.apiUrl}/users/${userId}`,body
    );
  }

  deleteUser(userId: number): Observable<UsersModel> {
    return this.httpClient.delete<any>(
      `${environment.apiUrl}/users/${userId}`
    );
  }

  getClients(): Observable<any>{
    return this.httpClient.get<any>(
      `${environment.apiUrl}/users/clients`
    );
  }

  getUsers(): Observable<any>{
    return this.httpClient.get<any>(
      `${environment.apiUrl}/users`
    );
  }

  getUserByName(name: string): Observable<UsersModel> {
    return this.httpClient.get<any>(
      `${environment.apiUrl}/users/${name}`
    );
  }



}
