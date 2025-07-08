import { Component, Input } from '@angular/core';
import { Tasks } from 'src/app/domain/tasks/tasks';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() dataSource: Tasks[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() columnLabels: { [key: string]: string } = {};
}
