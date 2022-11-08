import { HttpClient } from "@angular/common/http";
import {Injectable, OnDestroy, OnInit} from "@angular/core";
import {Observable, Subscription} from "rxjs";
import {environment} from "../../environments/environment";
import {DeviceModel} from "../models/device.model";


@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private httpClient: HttpClient) {
  }

  getDevice(deviceId: number):Observable<any>{
    return this.httpClient.get<any>(
      `${environment.apiUrl}/devices/${deviceId}`
    );
  }

  createDevice(body: DeviceModel):Observable<DeviceModel>{
    return this.httpClient.post<any>(
      `${environment.apiUrl}/devices`,body
    );
  }

  updateDevice(deviceId:number, body: DeviceModel):Observable<DeviceModel>{
    return this.httpClient.patch<any>(
      `${environment.apiUrl}/devices/${deviceId}`,body
    );
  }

  deleteDevice(deviceId: number): Observable<DeviceModel> {
    return this.httpClient.delete<any>(
      `${environment.apiUrl}/devices/${deviceId}`
    );
  }

  getDevices(): Observable<any>{
    return this.httpClient.get<any>(
      `${environment.apiUrl}/devices`
    );
  }

  getDeviceByUser(userId: number): Observable<any>{
    return this.httpClient.get<any>(
      `${environment.apiUrl}/devices/user/${userId}`
    )
  }


}
