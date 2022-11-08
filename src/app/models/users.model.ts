export class UsersModel {
  id: number =0;
  name: string="";
  role: boolean=false;
  password: string="";

  constructor(user: any) {
    this.name = user.name;
    this.role = user.role;
    this.password = user.password;
  }

}
