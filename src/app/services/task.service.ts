import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { Task } from './../model/task';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskListObservible = new BehaviorSubject<Array<Task>>([]);

  constructor(private httpService: HttpService) {
    this.httpService.getTask().subscribe(list => {
      this.taskListObservible.next(list);
    })
  }
  add(task: Task) {
    const taskList = this.taskListObservible.getValue()
    taskList.push(task)
    this.taskListObservible.next(taskList);
  }

  done(task: Task) {
    task.end = new Date();
    task.isDone = true;
    const list = this.taskListObservible.getValue();
    this.taskListObservible.next(list);
  }

  delete(task: Task) {
    const taskList = this.taskListObservible.getValue()
    this.taskListObservible.next(taskList);
  }

  getTaskListObs(): Observable<Array<Task>> {
    return this.taskListObservible.asObservable();
  }

  postTasksInDB() {
    this.httpService.putTask(this.taskListObservible.getValue());
  }

}
