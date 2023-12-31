import { TaskService } from './services/task.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private taskService: TaskService) {

  }

  save(){
    this.taskService.postTasksInDB();
  }
}
