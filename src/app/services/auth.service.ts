import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {UsersModel} from "../models/users.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  model: any={};
  sessionId: any ="";
  constructor(private httpClient: HttpClient) {
  }

  apiUrl ="http://localhost:8080";

  loginUser (user: any): Observable<any> {
    console.log(user)
   return this.httpClient.post(`${this.apiUrl}/login`,user);
  }

}

