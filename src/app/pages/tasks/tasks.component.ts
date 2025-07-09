import {Component, OnInit} from '@angular/core';
import {TasksService} from 'src/app/application/tasks/tasks.service';
import {Tasks} from 'src/app/domain/tasks/tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  createTask: boolean = false;

  tasks: Tasks[] = [];
  columns: string[] = ['id', 'title', 'description', 'status', 'action'];

  labels: { [key: string]: string } = {
    id: 'ID',
    title: 'Заголовок',
    description: 'Описание',
    status: 'Статус',
    action: 'Действие'
  };

  newTask(event: Tasks) {
    this.tasks = [...this.tasks, event];
  }

  constructor(taskService: TasksService) {
    this.tasks = taskService.getTasks();
  }

}
