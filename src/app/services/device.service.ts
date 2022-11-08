import { HttpClient } from "@angular/common/http";
import {Injectable, OnDestroy, OnInit} from "@angular/core";
import {Observable, Subscription} from "rxjs";
import { environment} from "../../environments/environment";
import {DeviceModel} from "../models/device.model";


@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  apiUrltest ="http://localhost:8080";
  constructor(private httpClient: HttpClient) {
  }

  getDevice(deviceId: number):Observable<any>{
    return this.httpClient.get<any>(
      `${this.apiUrltest}/devices/${deviceId}`
    );
  }

  createDevice(body: DeviceModel):Observable<DeviceModel>{
    return this.httpClient.post<any>(
      `${this.apiUrltest}/devices`,body
    );
  }

  updateDevice(deviceId:number, body: DeviceModel):Observable<DeviceModel>{
    return this.httpClient.patch<any>(
      `${this.apiUrltest}/devices/${deviceId}`,body
    );
  }

  deleteDevice(deviceId: number): Observable<DeviceModel> {
    return this.httpClient.delete<any>(
      `${this.apiUrltest}/devices/${deviceId}`
    );
  }

  getDevices(): Observable<any>{
    return this.httpClient.get<any>(
      `${this.apiUrltest}/devices`
    );
  }

  getDeviceByUser(userId: number): Observable<any>{
    return this.httpClient.get<any>(
      `${this.apiUrltest}/devices/user/${userId}`
    )
  }


}
