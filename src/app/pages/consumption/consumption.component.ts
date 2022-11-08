import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";
import {UsersModel} from "../../models/users.model";
import {Subscription} from "rxjs";
import {UsersService} from "../../services/users.service";
import {ConsumptionModel} from "../../models/consumption.model";
import {ConsumptionService} from "../../services/consumption.service";
@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.scss']
})
export class ConsumptionComponent implements OnInit, OnDestroy{

  consList: ConsumptionModel[]=[];
  $consList!: Subscription;
  editMode!: boolean;
  selectedCons!: UsersModel;

  constructor(private consService: ConsumptionService) {  }

  ngOnDestroy(): void {
    this.$consList?.unsubscribe();
  }

  ngOnInit(): void {
    this.getConsumptions();
  }

  getConsumptions(){
    this.$consList=this.consService.getConsumptions().subscribe(
      (res) => {if(res) {
        this.consList=res.items;
      }},
      (error: any)=>{
        console.log("Nu exista inregistrari");
      }
    )
  }

  getConsumption(consId: number){
    this.consService.getConsumption(consId).subscribe(
      (res)=>{ this.selectedCons = res; },
      (error: any)=>{
        console.log("Nu exista cons cu id-ul dat");
      }
    )
  }

  getConsumptionByDevice(deviceId: number){
    this.consService.getConsumptionsByDevice(deviceId).subscribe(
      (res)=>{ this.selectedCons = res; },
      (error: any)=>{
        console.log("Nu exista cons cu device-ul dat");
      }
    )
  }

  createCons(event: any){
    this.consService.createConsumption(event).subscribe(
      (res) => {this.consList.push(res);},
      (error: any)=>{
        console.log("Eroare creare");
      }
    )
  }

  deleteCons(event: any){
    this.consService.deleteConsumption(event.id).subscribe(
      (res) => {this.consList.splice(this.consList.indexOf(event));},
      (error: any)=>{
        console.log("Eroare creare");
      }
    )
  }

  updateCons(event:any){
    this.consService.updateConsumption(event.id,event).subscribe(
      (res) => {this.consList[this.consList.findIndex(x=>x.id === this.selectedCons.id)] = res;},
      (error) =>{console.log("Can't update");}

    )
  }

  addNewCons(){
    this.editMode = false;
  }

  editCons(event:any){
    this.selectedCons=event;
    this.editMode = true;
  }




}
