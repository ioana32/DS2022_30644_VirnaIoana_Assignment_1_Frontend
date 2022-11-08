import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import { environment} from "../../environments/environment";
import {UsersModel} from "../models/users.model";


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient: HttpClient) {
  }
  apiUrltest ="http://localhost:8080";

  getUser(userId: number):Observable<any>{
    return this.httpClient.get<any>(
      `${(this.apiUrltest)}/users/${userId}`
    );
  }

  createUser(body: UsersModel):Observable<UsersModel>{
    return this.httpClient.post<any>(
      `${this.apiUrltest}/users`,body
    );
  }

  updateUser(userId:number, body: UsersModel):Observable<UsersModel>{
    return this.httpClient.patch<any>(
      `${this.apiUrltest}/users/${userId}`,body
    );
  }

  deleteUser(userId: number): Observable<UsersModel> {
    return this.httpClient.delete<any>(
      `${this.apiUrltest}/users/${userId}`
    );
  }

  getClients(): Observable<any>{
    return this.httpClient.get<any>(
      `${this.apiUrltest}/users/clients`
    );
  }

  getUsers(): Observable<any>{
    return this.httpClient.get<any>(
      `${this.apiUrltest}/users`
    );
  }

  getUserByName(name: string): Observable<UsersModel> {
    return this.httpClient.get<any>(
      `${this.apiUrltest}/users/${name}`
    );
  }



}
