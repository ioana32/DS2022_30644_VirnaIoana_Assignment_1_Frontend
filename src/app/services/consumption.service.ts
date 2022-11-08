import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ConsumptionModel} from "../models/consumption.model";


class CconsumptionModel {
}

@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {
  constructor(private httpClient: HttpClient) {
  }
  apiUrltest ="http://localhost:8080";
  getConsumption(consumptionId: number):Observable<any>{
    return this.httpClient.get<any>(
      `${this.apiUrltest}/consumptions/${consumptionId}`
    );
  }

  createConsumption(body: ConsumptionModel):Observable<ConsumptionModel>{
    return this.httpClient.post<any>(
      `${this.apiUrltest}/consumptions`,body
    );
  }

  updateConsumption(consumptionId:number, body: ConsumptionModel):Observable<ConsumptionModel>{
    return this.httpClient.patch<any>(
      `${this.apiUrltest}/consumptions/${consumptionId}`,body
    );
  }

  deleteConsumption(consumptionId: number): Observable<ConsumptionModel> {
    return this.httpClient.delete<any>(
      `${this.apiUrltest}/consumptions/${consumptionId}`
    );
  }

  getConsumptions(): Observable<any>{
    return this.httpClient.get<any>(
      `${this.apiUrltest}/consumptions`
    );
  }

  getConsumptionsByDevice(deviceId: number): Observable<any>{
    return this.httpClient.get<any>(
      `${this.apiUrltest}/consumptions/device/${deviceId}`
    );
  }


}
