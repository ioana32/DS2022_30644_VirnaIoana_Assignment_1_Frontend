import {
  Component,
  OnDestroy,
  OnInit
} from "@angular/core";
import {DeviceModel} from "../../models/device.model";
import {Subscription} from "rxjs";
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit, OnDestroy{

  devicesList: DeviceModel[]=[];
  $devicesList!: Subscription;
  editMode!: boolean;
  selectedDevice!: DeviceModel;

  constructor(private deviceService: DeviceService) {  }

  ngOnDestroy(): void {
    this.$devicesList?.unsubscribe();
  }

  ngOnInit(): void {
    this.getDevices();
    //Scrollbar.init(document.querySelector("#myId"))
  }

  getDevices(){
    this.$devicesList=this.deviceService.getDevices().subscribe(
      (res) => {if(res) {
        // console.log(res);
        this.devicesList=res;
      }
      console.log(this.devicesList);
        },
      (error: any)=>{
        console.log("Nu exista deviceuri");
      }

    )

  }

  getDevice(deviceId: number){
    this.deviceService.getDevice(deviceId).subscribe(
      (res)=>{ this.selectedDevice = res; },
      (error: any)=>{
        console.log("Nu exista deviceuri cu id-ul dat");
      }
    )
  }


  createDevice(event: any){
    this.deviceService.createDevice(event).subscribe(
      (res) => {this.devicesList.push(res);},
      (error: any)=>{
        console.log("Eroare creare");
      }
    )
  }

  deleteDevice(event: any){
    console.log(event);
    this.deviceService.deleteDevice(event.id).subscribe(
      (res) => {this.devicesList.splice(this.devicesList.indexOf(event));},
      (error: any)=>{
        console.log("Eroare stergere");
      }
    )
  }

  updateDevice(event:any){
    this.deviceService.updateDevice(this.selectedDevice.id,event).subscribe(
      (res) => {this.devicesList[this.devicesList.findIndex(x=>x.id === this.selectedDevice.id)] = res;},
      (error) =>{console.log("Can't update");}

    )
    this.editMode = false;
  }

  addNewDevice(){
    this.editMode = false;
  }

  editDevice(event:any){
    this.selectedDevice=event;
    this.editMode = true;
  }




}

