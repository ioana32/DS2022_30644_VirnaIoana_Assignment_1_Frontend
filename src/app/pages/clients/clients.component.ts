import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";
import {UsersModel} from "../../models/users.model";
import {Subscription} from "rxjs";
import {UsersService} from "../../services/users.service";
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, OnDestroy{

  usersList: UsersModel[]=[];
  $usersList!: Subscription;
  editMode!: boolean;
  selectedUser!: UsersModel;

  constructor(private usersService: UsersService) {  }

  ngOnDestroy(): void {
    this.$usersList?.unsubscribe();
  }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    this.$usersList=this.usersService.getClients().subscribe(
      (res) => {if(res) {
        this.usersList=res;
      }
        console.log(this.usersList);
      },
      (error: any)=>{
        console.log("Nu exista clienti");
      }
    )
  }

  getUser(userId: number){
    this.usersService.getUser(userId).subscribe(
      (res)=>{ this.selectedUser = res; },
      (error: any)=>{
        console.log("Nu exista useri cu id-ul dat");
      }
    )
  }

  getUsers(){
    this.$usersList=this.usersService.getUsers().subscribe(
      (res) => {if(res) {
        this.usersList=res.items;
      }},
      (error: any)=>{
        console.log("Nu exista clienti");
      }
    )
  }

  createUser(event: any){
    this.usersService.createUser(event).subscribe(
      (res) => {this.usersList.push(res);},
      (error: any)=>{
        console.log("Eroare creare");
      }
    )
  }

  deleteUser(event: any){
    console.log(event);
    this.usersService.deleteUser(event.id).subscribe(
      (res) => {this.usersList.splice(this.usersList.indexOf(event));},
      (error: any)=>{
        console.log("Eroare stergere");
      }
    )
  }

  updateUser(event:any){
    this.usersService.updateUser(this.selectedUser.id,event).subscribe(
      (res) => {this.usersList[this.usersList.findIndex(x=>x.id === this.selectedUser.id)] = res;},
      (error) =>{console.log("Can't update");}

    )

    this.editMode = false;
  }

  addNewUser(){
    this.editMode = false;
  }

  editUser(event:any){
    this.selectedUser=event;
    this.editMode = true;
  }




}
