import { Task } from '../model/task';
import { TaskService } from './../services/task.service';
import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent {

  taskList: Array<Task> = [];

  constructor(private taskService: TaskService) {
    taskService.getTaskListObs().subscribe((task: Array<Task>) => {
      this.taskList = task.filter (t => t.isDone === false);
    });
  }

  done(task: Task) {
    this.taskService.done(task);
  }

  delete(task: Task) {
    this.taskService.delete(task);
  }
}
