import { Component, OnInit } from '@angular/core';
import {
  Task,
  Dependency,
  Resource,
  ResourceAssignment,
} from './model/gantt-data';
import { GanttDataService } from './services/gantt-data.service';

@Component({
  selector: 'app-projeler-gantt',
  templateUrl: './projeler-gantt.component.html',
  styleUrls: ['./projeler-gantt.component.css'],
})
export class ProjelerGanttComponent implements OnInit {
  tasks!: Task[];

  dependencies!: Dependency[];

  resources!: Resource[];

  resourceAssignments!: ResourceAssignment[];

  constructor(private ganttDataService: GanttDataService) {}

  ngOnInit(): void {
    this.tasks = this.ganttDataService.getTasks();
    this.dependencies = this.ganttDataService.getDependencies();
    this.resources = this.ganttDataService.getResources();
    this.resourceAssignments = this.ganttDataService.getResourceAssignments();
  }
}
