import {Component, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{

  device?: boolean ;
  users?: boolean ;

  loged: boolean=true;

  constructor(private router: Router) {

  }


  ngOnInit(): void {
    this.device=false;
    this.users=false;
    this.loged=true;
  }

  onDevices(){
    if(this.device === false)
      this.device = true;
    else
      this.device=false;
  }

  onUsers(){
      if(this.users === false)
        this.users = true;
      else
        this.users=false;
  }

  logOut(){
    this.router.navigate(['/auth']);
    this.loged=false;
  }
}

