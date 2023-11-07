import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeScheduleComponent } from './employee-schedule/employee-schedule.component';

@NgModule({
  declarations: [
  
    EmployeeScheduleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
