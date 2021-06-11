import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {RouterModule, Routes } from '@angular/router';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { DataServiceService } from './data-service.service';





const appRoutes:Routes=[
  {path:'addEmployee', component:AddEmployeeComponent},
  {path:'showEmployee', component:ShowEmployeeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ShowEmployeeComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
