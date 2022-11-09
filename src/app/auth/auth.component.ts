import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription, throwError} from "rxjs";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {UsersModel} from "../models/users.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import { environment} from "../../environments/environment";
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{

  // name: String="";
  user: any={};
  apiUrltest ="http://localhost:8080";

  loged:boolean =true;

  constructor(private authService: AuthService,private router: Router,) {
  }

  ngOnInit() {
    this.loged=true;
  }

  onSubmit(){
   console.log(this.user);
   this.authService.loginUser(this.user).subscribe(data=>{
     this.user=data;
     this.afterLogIn(this.user);
     this.loged=false;
   },error =>
     alert("User not found"));
  }



  afterLogIn(data: UsersModel){
    console.log(data.role)
    if(data.role===true)
      this.router.navigate(['/admin']);
    else {
      this.router.navigate(['/account']);
      localStorage.setItem('id',String(data.id));
    }


  }

}

