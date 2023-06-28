import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly URL_DB = 'http test';
  readonly params = new HttpParams().set("test", "test");

  constructor(private http: HttpClient) {}

  getTask(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL_DB, {params: this.params});
  }

  putTask(list: Array<Task>) {
    this.http.put(this.URL_DB, {params: this.params});
  }
}
