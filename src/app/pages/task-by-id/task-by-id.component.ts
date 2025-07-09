import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TasksService} from 'src/app/application/tasks/tasks.service';
import {Tasks} from 'src/app/domain/tasks/tasks';

@Component({
  selector: 'app-task-by-id',
  templateUrl: './task-by-id.component.html',
  styleUrls: ['./task-by-id.component.css']
})
export class TaskByIdComponent implements OnInit {
  taskId: number = 0;
  task!: Tasks | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskService: TasksService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('taskId');
      if (id) {
        this.taskId = +id;
        console.log(1);
        this.task = this.taskService.getTaskById(this.taskId);
      }
    });
  }
}
