import {Injectable} from '@angular/core';
import {Tasks} from "../../domain/tasks/tasks";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Tasks[] = [
    {id: 1, title: 'Задача 1', description: 'Описание задачи 1', status: 'В работе'},
    {id: 2, title: 'Задача 2', description: 'Описание задачи 2', status: 'Не выполнена'},
    {id: 3, title: 'Задача 3', description: 'Описание задачи 3', status: 'Выполнена'},
  ]

  getTasks() {
    return this.tasks;
  }

  getTaskById(id: number) {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(task: Tasks) {

    return this.tasks.push(task);
  }
}
