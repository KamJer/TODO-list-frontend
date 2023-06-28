import { Task } from '../model/task';
import { TaskService } from './../services/task.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent {
  @Input()
  taskDone: Array<Task> = [];

  constructor(private taskService: TaskService) {
    taskService.getTaskListObs().subscribe((tasks: Array<Task>) => {
      this.taskDone = tasks.filter(t => t.isDone === true);
    });
  }
}
