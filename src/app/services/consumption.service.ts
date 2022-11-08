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

  getConsumption(consumptionId: number):Observable<any>{
    return this.httpClient.get<any>(
      `${environment.apiUrl}/consumptions/${consumptionId}`
    );
  }

  createConsumption(body: ConsumptionModel):Observable<ConsumptionModel>{
    return this.httpClient.post<any>(
      `${environment.apiUrl}/consumptions`,body
    );
  }

  updateConsumption(consumptionId:number, body: ConsumptionModel):Observable<ConsumptionModel>{
    return this.httpClient.patch<any>(
      `${environment.apiUrl}/consumptions/${consumptionId}`,body
    );
  }

  deleteConsumption(consumptionId: number): Observable<ConsumptionModel> {
    return this.httpClient.delete<any>(
      `${environment.apiUrl}/consumptions/${consumptionId}`
    );
  }

  getConsumptions(): Observable<any>{
    return this.httpClient.get<any>(
      `${environment.apiUrl}/consumptions`
    );
  }

  getConsumptionsByDevice(deviceId: number): Observable<any>{
    return this.httpClient.get<any>(
      `${environment.apiUrl}/consumptions/device/${deviceId}`
    );
  }


}
