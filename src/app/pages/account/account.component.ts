import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from "@angular/core";
import {ConsumptionModel} from "../../models/consumption.model";
import {Subscription} from "rxjs";
import {UsersService} from "../../services/users.service";
import {ConsumptionService} from "../../services/consumption.service";
import {DeviceModel} from "../../models/device.model";
import {DeviceService} from "../../services/device.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{

  devicesList: DeviceModel[]=[];
  $devicesList!: Subscription;
  consShow?: boolean;
  loged: boolean=true;

  ngOnInit(): void {
    this.getDevicesByUser(Number(localStorage.getItem('id')))
    // console.log(localStorage.getItem('id'));
    this.loged=true;
  }

  constructor(private deviceService: DeviceService,
              private consumptionService: ConsumptionService,
              private router: Router) {
  }

  onSelect(event:any){
    console.log(event);
  }

  getDevicesByUser(userId: number){
    this.$devicesList=this.deviceService.getDeviceByUser(userId).subscribe(
      (res) => {if(res) {
        this.devicesList=res;
      }
      console.log(res);
      },
      (error: any)=>{
        console.log("Nu exista deviceuri");
      }

    )
  }


  showCons(){}

  logOut(){
    this.router.navigate(['/auth']);
    this.loged=false;
  }

}

