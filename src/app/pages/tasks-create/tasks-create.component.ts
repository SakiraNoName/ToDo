import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TasksService} from "../../application/tasks/tasks.service";
import {Tasks} from "../../domain/tasks/tasks";


@Component({
  selector: 'app-tasks-create',
  templateUrl: './tasks-create.component.html',
  styleUrls: ['./tasks-create.component.css']
})
export class TasksCreateComponent {
  @Output() tasks = new EventEmitter<Tasks>();
  statuses = [
    {id: 'pending', status: 'Не выполнена'},
    {id: 'in_progress', status: 'В работе'},
    {id: 'done', status: 'Выполнена'}
  ];

  constructor(private tasksService: TasksService) {
  }

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    status: new FormControl(this.statuses[0].status, [Validators.required]), // 'Не выполнена'
  });

  Submit() {
    const formValue = this.form.value;
    if (this.form.valid) {
      const newTask = {
        id: Number(Date.now()),
        title: formValue.title ?? '',
        description: formValue.description ?? '',
        status: formValue.status ?? ''
      };

      this.tasks.emit(newTask);
      this.tasksService.createTask(newTask);
      this.form.reset();
    } else {
      console.log('Форма невалидна');
    }
  }
}
