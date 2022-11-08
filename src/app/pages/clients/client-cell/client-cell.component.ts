import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";
import {UsersModel} from "../../../models/users.model";
@Component({
  selector: 'app-client-cell',
  templateUrl: './client-cell.component.html',
  styleUrls: ['./client-cell.component.scss']
})
export class ClientCellComponent implements OnInit{

  @Input() client!: any;
  @Output() onEditAction = new EventEmitter();
  @Output() onDeleteAction = new EventEmitter();

  constructor() {
  }
  ngOnInit(): void {
    console.log(this.client+"client");
  }

  onEdit() {
    this.onEditAction.emit(this.client);
  }

  onDelete(){
    this.onDeleteAction.emit(this.client);
  }



}

