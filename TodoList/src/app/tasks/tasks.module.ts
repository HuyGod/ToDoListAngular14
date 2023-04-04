import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { TaskServiceService } from './task.service';
import { HttpClientModule } from '@angular/common/http';
import { TaskTableComponent } from '../task-table/task-table.component';
@NgModule({
  declarations: [
    HomeComponent,
    TaskTableComponent
  ],
  providers: [TaskServiceService],
  imports: [
    CommonModule,
    MatDatepickerModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent
  ]
})
export class TasksModule { }
