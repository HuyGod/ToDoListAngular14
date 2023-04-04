import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { NewTask } from './new-task.dto';
import { TaskItem } from './task-item.dto';
import { TaskServiceService } from './task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit { 
  constructor(private route: ActivatedRoute,
    private taskService: TaskServiceService
    ) {}
  

  tasks = this.taskService.getAllTask(this.route.snapshot.params['date']);
  newTask: NewTask = new NewTask();
  
  ngOnInit(): void {
    var strDate = this.route.snapshot.params['date'];
    this.newTask = new NewTask(this.newTask.title, new Date(strDate));
  
  }

 
   add(taskNgForm: NgForm){
    
    if(taskNgForm.touched == false)
    return;

    // if(taskNgForm.valid == false)
    // return;

     this.taskService.addTask(this.newTask.date, this.newTask);
   //  this.tasks = this.taskService.getAllTask();
      taskNgForm.reset({date: this.newTask.date})
     
    
   }
   remove(exitsitingTask: TaskItem){
     var userconfrim =  confirm(`Are you sure delete? \n "${exitsitingTask.title}"`);

     if(userconfrim){
      this.taskService.removeTask(this.newTask.date, exitsitingTask);
    //  this.tasks = this.taskService.getAllTask();
     }
 
   }
  
 }

