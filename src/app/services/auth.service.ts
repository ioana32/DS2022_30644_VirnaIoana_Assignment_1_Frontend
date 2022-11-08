import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  model: any={};
  sessionId: any ="";
  constructor(private httpClient: HttpClient,
              private router: Router) {
  }

  redirectUrl:string = "/clients";

  // login():  {
  //   // const body = new HttpParams()
  //   //   .set("username", loginData.username)
  //   //   .set("password", loginData.password);
  //   // return this.httpClient.post<any>(`${environment.apiUrl}/users`, loginData);
  //   this.httpClient.post<any>(`${environment.apiUrl}/users`, {
  //     userName: this.model.userName,
  //     password: this.model.password
  //   })
  // }

}

