import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DxGanttComponent } from 'devextreme-angular';
import popup from 'devextreme/ui/popup';
import {
  Task,
  Dependency,
  Resource,
  ResourceAssignment,
} from './model/gantt-data';
import { GanttDataService } from './services/gantt-data.service';

import { exportGantt as exportGanttToPdf } from 'devextreme/pdf_exporter';
// import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import jsPDF from 'jspdf';

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

  scaleType!: string;

  titlePosition!: string;

  showResources!: any;

  showDependencies!: any;

  showDifferentTaskContent!: any;

  showCustomTaskTooltip!: boolean | null | undefined;

  startDateRange!: any;

  endDateRange!: any;

  infoPopupButtonOptions: any;
  saveDataButtonOptions: any;
  exportButtonOptions:any;

  infoPopupVisible!: boolean;

  contextMenuItems!: any;

  // export options/filters definitions
  formats: string[] = ['A0', 'A1', 'A2', 'A3', 'A4', 'Auto'];

  exportModes: string[] = ['All', 'Chart', 'Tree List'];

  dateRanges: string[] = ['All', 'Visible', 'Custom'];

  formatBoxValue!: string;

  exportModeBoxValue!: string;

  dateRangeBoxValue!: string;

  landscapeCheckBoxValue!: any;

  startTaskIndex!: number;

  endTaskIndex!: number;

  startDate!: any;

  endDate!: any;

  customRangeDisabled!: boolean;

  // sorting

  sortingMode!: 'single' | 'multiple' | 'none';

  showSortIndexes!: boolean;


  constructor(private ganttDataService: GanttDataService,private ref: ChangeDetectorRef) {}

  @ViewChild(DxGanttComponent, { static: false })
  gantt!: DxGanttComponent;

  ngOnInit(): void {
    this.tasks = this.ganttDataService.getTasks();
    this.dependencies = this.ganttDataService.getDependencies();
    this.resources = this.ganttDataService.getResources();
    this.resourceAssignments = this.ganttDataService.getResourceAssignments();
    this.scaleType = 'months';
    this.titlePosition = 'outside';
    this.showResources = true;
    this.showDependencies = true;
    this.showDifferentTaskContent = false;
    this.showCustomTaskTooltip = true;
    this.startDateRange = new Date(2018, 11, 1);
    this.endDateRange = new Date(2019, 11, 1);
    this.infoPopupVisible = false;

    // export options/filters definitions
    this.formatBoxValue = this.formats[0];
    this.landscapeCheckBoxValue = true;
    this.exportModeBoxValue = this.exportModes[0];
    this.dateRangeBoxValue = this.dateRanges[1];
    this.startTaskIndex = 0;
    this.endTaskIndex = 3;
    this.startDate = this.tasks[0].start;
    this.endDate = this.tasks[0].end;
    this.customRangeDisabled = true;

    // sorting
    this.sortingMode = 'multiple';
    this.showSortIndexes = true;

    this.infoPopupButtonOptions = {
      text: 'About',
      icon: 'info',
      stylingMode: 'text',
      onClick: () => {
        this.infoPopupVisible = true;
      },
    };

    this.saveDataButtonOptions = {
      text: 'Save Data',
      icon: 'save',
      stylingMode: 'text',
      onClick: () => {
        this.saveData();
      }
    }

    this.exportButtonOptions = {
      hint: 'Export to PDF',
      icon: 'exportpdf',
      stylingMode: 'text',
      onClick: () => this.exportButtonClick(),
    };

    this.contextMenuItems = this.getContextMenuItems();
  }

  getTimeEstimate(task: any) {
    return Math.abs(task.start - task.end) / 36e5;
  }

  getTimeLeft(task: any) {
    const timeEstimate = Math.abs(task.start - task.end) / 36e5;
    return Math.floor(((100 - task.progress) / 100) * timeEstimate);
  }

  getTime(date: any) {
    return date.toLocaleString();
  }

  getImagePath(taskId: any) {
    const imgPath =
      'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees';
    let img = taskId < 10 ? `0${taskId}` : taskId;
    img = `${imgPath}/${img}.png`;
    return img;
  }

  getTaskColor(taskId: any) {
    const color = taskId % 6;
    return `custom-task-color-${color}`;
  }

  repaint() {
    this.gantt.instance.repaint();
  }
  saveData() {
    confirm('Data saved');
  }

  onContextMenuPreparing(e: any) {
    alert('Context menu is openning');
  }

  onCustomCommandClick(e:any) {
    if (e.name == 'ToggleDisplayOfResources') {
      this.showResources = !this.showResources;
    }
  }

  getContextMenuItems() {
    return [
      'addTask',
      'taskdetails',
      'deleteTask',
      {
        name: 'ToggleDisplayOfResources',
        text: 'Toggle Display of Resources',
      },
    ];
  }

  onCustomizeContextMenu(e: any) {
    this.contextMenuItems = e.value ? this.getContextMenuItems() : undefined;
  }

  // Export Options/Filters
  exportButtonClick() {
    const gantt = this.gantt.instance;
    const format = this.formatBoxValue.toLowerCase();
    const isLandscape = this.landscapeCheckBoxValue;
    const exportMode = this.getExportMode();
    const dataRangeMode = this.dateRangeBoxValue.toLowerCase();
    let dataRange;
    if (dataRangeMode === 'custom') {
      dataRange = {
        startIndex: this.startTaskIndex,
        endIndex: this.endTaskIndex,
        startDate: this.startDate,
        endDate: this.endDate,
      };
    }
    // else {
    //   dataRange = dataRangeMode;
    // }
    exportGanttToPdf(
      {
        component: gantt,
        createDocumentMethod: (args?: any) => new jsPDF(args),
        format,
        landscape: isLandscape,
        exportMode,
        dateRange: dataRange,
      },
    ).then((doc) => doc.save('gantt.pdf'));
  }

  getExportMode() {
    if (this.exportModeBoxValue === 'Tree List') { return 'treeList'; }
    if (this.exportModeBoxValue === 'All') { return 'all'; }
    if (this.exportModeBoxValue === 'Chart') { return 'chart'; }
    return 'all';
  }

  onDateRangeBoxSelectionChanged(e:any) {
    this.customRangeDisabled = e.value !== 'Custom';
    this.ref.detectChanges();
  }
  // onTaskEditDialogShowing(e: any) {
  //   e.cancel = true;
  //   this.yourCustomMethod(e);
  // }

  // yourCustomMethod(e:any) {
  //   this.gantt.instance.showTaskDetailsDialog('11');
  //   e.cancel = false
  //   // ...
  // }
}
