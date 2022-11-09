import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {ClientsComponent} from "./pages/clients/clients.component";
import {AccountComponent} from "./pages/account/account.component";

export const routes: Routes = [
  {path: 'auth',component: AuthComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'account', component: AccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
