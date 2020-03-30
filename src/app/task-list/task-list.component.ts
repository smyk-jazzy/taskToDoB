import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  @Input()
  taskList = [];

  @Input()
  showDoneTaskButton = false;

  @Input()
  numberTaskCaption = '';

  @Input()
  removeAllTasksCaption = '';

  @Input()
  styleClass = '';

  @Output()
  doneTaskEvent = new EventEmitter<string>();

  @Output()
  removeTaskEvent = new EventEmitter<string>();

  @Output()
  removeAllTasksEvent = new EventEmitter<void>();



  doneTask(task: string) {
    this.doneTaskEvent.emit(task);
  }

  removeTask(task: string) {
    this.removeTaskEvent.emit(task);
  }

  removeAllTasks() {
    this.removeAllTasksEvent.emit();
  }
}
