import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthComponent} from "./auth/auth.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ClientsComponent} from "./pages/clients/clients.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {ClientCellComponent} from "./pages/clients/client-cell/client-cell.component";
import {ClientEditComponent} from "./pages/clients/client-edit/client-edit.component";
import {DevicesComponent} from "./pages/devices/devices.component";
import {DeviceCellComponent} from "./pages/devices/device-cell/device-cell.component";
import {DeviceEditComponent} from "./pages/devices/device-edit/device-edit.component";
import {HttpClientModule} from "@angular/common/http";
import {ConsumptionComponent} from "./pages/consumption/consumption.component";
import {AccountComponent} from "./pages/account/account.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AdminComponent,
    ClientsComponent,
    ClientCellComponent,
    ClientEditComponent,
    DevicesComponent,
    DeviceCellComponent,
    DeviceEditComponent,
    ConsumptionComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    //NgxChartsModule,
  ],
  providers: [],
  exports: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
