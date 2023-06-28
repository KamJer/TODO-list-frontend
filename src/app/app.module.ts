import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { TaskService } from './services/task.service';
import { DateDirective } from './shared/date.directive';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    DateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TaskService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
