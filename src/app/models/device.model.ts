import {UsersModel} from "./users.model";

export class DeviceModel {
  id: number = 0;
  description = "";
  address="";
  maxEnergy: number = 0;
  user?: UsersModel = {
    id:0,
    name:"",
    role:false,
    password:"",}
}
