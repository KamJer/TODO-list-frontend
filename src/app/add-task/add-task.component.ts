import { Task } from '../model/task';
import { TaskService } from './../services/task.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  newTask: String = '';

  constructor(private taskService: TaskService) {
  }

  add() {
    const task: Task = {name: this.newTask, created: new Date(), isDone: false};
    this.taskService.add(task);
    this.newTask = '';
  }
}
