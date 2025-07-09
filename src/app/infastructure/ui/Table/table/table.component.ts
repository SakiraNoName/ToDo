import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Tasks} from 'src/app/domain/tasks/tasks';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {
  @Input() dataSource: Tasks[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() columnLabels: { [key: string]: string } = {};

  filteredTasks: Tasks[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource']) {
      this.filterResults(); // обновляем при любом изменении входного массива
    }
  }

  filterResults(text?: string) {
    if (!text) {
      this.filteredTasks = this.dataSource;
    }
    if (text) {
      this.filteredTasks = this.dataSource.filter(
        dataSource => dataSource?.title.toLowerCase().includes(text.toLowerCase())
      );
    }
  }

}
