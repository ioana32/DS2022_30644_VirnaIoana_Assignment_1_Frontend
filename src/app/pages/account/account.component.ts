import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from "@angular/core";
import {ConsumptionModel} from "../../models/consumption.model";
import {Subscription} from "rxjs";
import {UsersService} from "../../services/users.service";
import {ConsumptionService} from "../../services/consumption.service";
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnChanges{

  curentClient: any;
  userId!: any;
  devicesList:any[]=[];
  energyCons!: number;
  prev: any;
  consList: ConsumptionModel[] =[];

  ngxData: ConsumptionModel[] = [];
  finalngxData: ConsumptionModel[] = [];
  view: [number, number] = [700, 400];

  hoursLabel: string[] = ["8:00", "9:00", "10:00", "11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00", "22:00","23:00", "00:00"];
  hours!: Date;//
  valueForHour!: number;
  $currentSensor!: Subscription;

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Hours';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Energy consumption';
  animations: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  ngOnChanges(changes: any): void {
  }

  ngOnInit(): void {
  }

  constructor(private usersService: UsersService,
              private consumptionService: ConsumptionService) {
  }

  onSelect(event:any){
    console.log(event);
  }



}

