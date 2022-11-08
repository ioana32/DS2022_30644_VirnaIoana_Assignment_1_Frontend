import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";
import {DeviceModel} from "../../../models/device.model";
import {DeviceService} from "../../../services/device.service";
@Component({
  selector: 'app-device-cell',
  templateUrl: './device-cell.component.html',
  styleUrls: ['./device-cell.component.scss']
})
export class DeviceCellComponent implements OnInit{

  @Input() device!: any;
  @Output() onEditAction = new EventEmitter();
  @Output() onDeleteAction = new EventEmitter();

  constructor() {
  }
  ngOnInit(): void {
    console.log(this.device+"device");
  }

  onEdit() {
    this.onEditAction.emit(this.device);
  }

  onDelete(){
    this.onDeleteAction.emit(this.device);
  }





}

