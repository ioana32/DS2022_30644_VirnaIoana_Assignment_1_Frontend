import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";
import {DeviceModel} from "../../../models/device.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.scss']
})
export class DeviceEditComponent implements OnInit{
  ngOnInit(): void {
  }

  @Input() edit! : boolean;
  @Input() device! :DeviceModel;
  @Output() confAct = new EventEmitter;
  deviceForm! : FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnChanges(changes: any):void {
    //console.log(changes);
    if(changes.device?.currentValue) {
      this.deviceForm.patchValue({
        deviceId:changes.device?.currentValue.id,
        userId: changes.device?.currentValue.userId,
        address:  changes.device?.currentValue.address,
        description:  changes.device?.currentValue.description,
        maxEnergy: changes.device?.currentValue.maxEnergy
      })
    }
    if(!this.edit)
      this.initializeClientForm();

  }

  private initializeClientForm() {
    this.deviceForm = this.formBuilder.group({
      id:["", Validators.required],
      userId:["", Validators.required],
      address: ["", Validators.required],
      description: ["", Validators.required],
      maxEnergy: ["", Validators.required],
      averageEnergyConsumption: ["", Validators.required]
    })
    this.deviceForm.controls['id'].disable();
  }

  onSubmit(){
    this.confAct.emit(this.deviceForm.value);
    this.resetForm();
  }

  resetForm(){
    this.deviceForm.reset();
  }
}

