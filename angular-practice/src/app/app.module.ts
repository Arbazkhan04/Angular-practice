import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StructuralComponent } from './structural/structural.component';
import { EmployeeRecordComponent } from './employee-record/employee-record.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    StructuralComponent,
    EmployeeRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
    


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
