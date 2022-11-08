import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription, throwError} from "rxjs";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {UsersModel} from "../models/users.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {environment} from "../../environments/environment";
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{

  model: any={};
  sessionId: any="";

  constructor(private httpClient: HttpClient,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm){

    form.reset();
  }

  login(){
      this.httpClient.post<any>(`${environment.apiUrl}/users`, {
        unsername: this.model.userName,
        password: this.model.password
      }).subscribe(res => {
        if(res){
          this.sessionId=res.sessionId;

          sessionStorage.setItem('token', this.sessionId);
          this.router.navigate(['']);
        } else {
          alert("Authentification failed.")
        }
      })

  }
}

