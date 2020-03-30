import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoTaskList = new Array<string>();
  doneTaskList = new Array<string>();

  constructor() {
    this.todoTaskList.push('Task 1');
    this.todoTaskList.push('Task 2');
    this.todoTaskList.push('Task 3');
    this.doneTaskList.push('Task 4');
  }

  addNewTask(newTask: string) {
    this.todoTaskList.push(newTask);
  }

  doneTask(task: string) {
    this.todoTaskList = this.removeTaskFromList(this.todoTaskList, task);
    this.doneTaskList.push(task);
  }

  removeToDoTask(task: string) {
    this.todoTaskList = this.removeTaskFromList(this.todoTaskList, task);
  }

  removeDoneTask(task: string) {
    this.doneTaskList = this.removeTaskFromList(this.doneTaskList, task);
  }

  removeTaskFromList(taskList: Array<string>, task: string): Array<string> {
    console.log('Task list to remove: ' + taskList.toString());
    console.log('Task to remove: ' + task);
    return taskList.filter((e) => e !== task);
  }

  removeAllToDoTasks() {
    this.todoTaskList = new Array<string>();
  }

  removeAllDoneTasks() {
    this.doneTaskList = new Array<string>();
  }
}
