import {Component, OnDestroy, OnInit} from "@angular/core";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{

  device?: boolean ;
  users?: boolean ;

  ngOnInit(): void {
    this.device=false;
    this.users=false;
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
}

