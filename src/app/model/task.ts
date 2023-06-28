import { Data } from "@angular/router";

export interface Task {
  id?: String;
  name: String;
  created: Date;
  end?: Date;
  isDone: boolean;
}
