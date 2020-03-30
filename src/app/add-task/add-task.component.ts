import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent {

  newTask = '';

  @Output()
  taskEmitter = new EventEmitter<string>();

  addNewTask() {
    this.checkTask(this.newTask);
    console.log('New task %s', this.newTask);
    this.taskEmitter.emit(this.newTask);
    this.newTask = '';
  }

  checkTask(task: string)  {
    if (task.trim().length === 0) {
      alert('Wypełnij wszystkie pola');
      throw new Error('Wypełnij wyszystkie pola');
    }
  }

}
