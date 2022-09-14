import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRecordComponent } from './employee-record/employee-record.component';
import { StructuralComponent } from './structural/structural.component';

const routes: Routes = [
  {path:'structure',component:StructuralComponent},
  {path:'employee',component:EmployeeRecordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
