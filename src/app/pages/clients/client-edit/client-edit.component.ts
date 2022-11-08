import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";
import {UsersModel} from "../../../models/users.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit{
  ngOnInit(): void {
  }

  @Input() edit! : boolean;
  @Input() client! :UsersModel;
  @Output() confAct = new EventEmitter;
  clientForm! : FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnChanges(changes: any):void {
    if(changes.client?.currentValue) {
      this.clientForm.patchValue({
        id: changes.client?.currentValue.id,
        name:  changes.client?.currentValue.name,
        password: changes.client?.currentValue.password
      })
    }
    if(!this.edit)
      this.initializeClientForm();

  }

  private initializeClientForm() {
    this.clientForm = this.formBuilder.group({
      id:["", Validators.required],
      name: ["", Validators.required],
      password:["",Validators.required]
    })
    this.clientForm.controls['id'].disable();
  }

  onSubmit(){
    this.confAct.emit(this.clientForm.value);
    this.resetForm();
  }

  resetForm(){
    this.clientForm.reset();
  }
}


