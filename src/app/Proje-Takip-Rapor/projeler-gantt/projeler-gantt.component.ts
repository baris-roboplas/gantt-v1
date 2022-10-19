import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { DxGanttComponent } from 'devextreme-angular';
import {
  Task,
  Dependency,
  Resource,
  ResourceAssignment,
} from './model/gantt-data';
import { GanttDataService } from './services/gantt-data.service';

import { exportGantt as exportGanttToPdf } from 'devextreme/pdf_exporter';
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
  exportButtonOptions: any;

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

  // Task Details Form
  customTaskDetailsForm: any;

  submitButtonOptions = {
    text: 'Submit the Form',
    useSubmitBehavior: true,
  };

  isPopupVisible!: boolean;

  constructor(
    private ganttDataService: GanttDataService,
    private ref: ChangeDetectorRef,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

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
    this.showDifferentTaskContent = true;
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
        this.saveGanttModifications();
      },
    };

    this.exportButtonOptions = {
      hint: 'Export to PDF',
      icon: 'exportpdf',
      stylingMode: 'text',
      onClick: () => this.exportButtonClick(),
    };

    this.contextMenuItems = this.getContextMenuItems();

    // Task Details Form/Popup
    this.isPopupVisible = false;
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

  onContextMenuPreparing(e: any) {
    // alert('Context menu is openning');
  }

  onCustomCommandClick(e: any) {
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
    exportGanttToPdf({
      component: gantt,
      createDocumentMethod: (args?: any) => new jsPDF(args),
      format,
      landscape: isLandscape,
      exportMode,
      dateRange: dataRange,
    }).then((doc) => doc.save('gantt.pdf'));
  }

  getExportMode() {
    if (this.exportModeBoxValue === 'Tree List') {
      return 'treeList';
    }
    if (this.exportModeBoxValue === 'All') {
      return 'all';
    }
    if (this.exportModeBoxValue === 'Chart') {
      return 'chart';
    }
    return 'all';
  }

  onDateRangeBoxSelectionChanged(e: any) {
    this.customRangeDisabled = e.value !== 'Custom';
    this.ref.detectChanges();
  }

  saveGanttModifications() {
    confirm('Data Saved(Database)');
  }

  onTaskEditDialogShowing(e: any) {
    e.cancel = true;
    this.customTaskDetailsForm = this.tasks.find((t) => t.id === Number(e.key));
    this.showTaskDetailsCustomForm(e);
  }

  showTaskDetailsCustomForm(e: any) {
    this.isPopupVisible = true;
    // ...
  }

  handleSubmit = function (e: any) {
    e.preventDefault();
  };

  // onContentReady(e: any) {
  //   let taskListRows =
  //     e.element.children[1].children[0].children[0].children[0].children[5]
  //       .children[0].children[0].children[0].children[0].children[0].children[1]
  //       .children;
  //   let tds;
  //   let td;
  //   for (let index = 0; index < taskListRows.length; index++) {
  //     tds = taskListRows[index];
  //     for (let index = 0; index < tds.children.length; index++) {
  //       td = tds.children[index];
  //       if (td.innerText == 'a') {
  //         td.style.backgroundColor = 'blue';
  //         break;
  //       }
  //     }
  //   }
  // }

  // Custom Task Content Template
  getTaskContentTemplate(item: any) {
    var parentContainer = document.createElement('div');

    this.appendPlannedTask(
      item.taskData,
      item.taskResources[0],
      item.taskSize.width,
      parentContainer
    );
    this.appendActualTask(item.taskData, item.taskSize.width, parentContainer);

    return parentContainer;
  }
  appendPlannedTask(
    taskData: any,
    resource: any,
    taskWidth: any,
    container: any
  ) {
    const plannedTaskContainer = this.renderer.createElement('div');
    // plannedTaskContainer.addClass('planned-task');
    this.renderer.addClass(plannedTaskContainer, 'planned-task');
    this.renderer.setAttribute(
      plannedTaskContainer,
      'width',
      `${taskWidth + 'px'}`
    );
    this.renderer.appendChild(container, plannedTaskContainer);
    // var plannedTaskContainer = document
    //   .createElement('div')
    //   .addClass('planned-task')
    //   .attr('style', 'width:' + taskWidth + 'px;')
    //   .appendTo(container);

    const wrapper = this.renderer.createElement('div');
    this.renderer.addClass(wrapper, 'planned-task-wrapper');
    this.renderer.appendChild(plannedTaskContainer, wrapper);

    // var wrapper = document
    //   .createElement('div')
    //   .addClass('planned-task-wrapper')
    //   .appendTo(plannedTaskContainer);

    const wrapperChild1 = this.renderer.createElement('div');
    this.renderer.addClass(wrapperChild1, 'planned-task-title');
    const wrapperChild1Text = this.renderer.createText(taskData.Title);
    this.renderer.appendChild(wrapperChild1, wrapperChild1Text);
    this.renderer.appendChild(wrapper, wrapperChild1);
    // document
    //   .createElement('div')
    //   .addClass('planned-task-title')
    //   .text(taskData.Title)
    //   .appendTo(wrapper);

    const wrapperChild2 = this.renderer.createElement('div');
    this.renderer.addClass(wrapperChild2, 'planned-task-resource');
    const wrapperChild2Text = this.renderer.createText(
      resource ? resource.text : ''
    );
    this.renderer.appendChild(wrapperChild2, wrapperChild2Text);
    this.renderer.appendChild(wrapper, wrapperChild2);
    // document
    //   .createElement('div')
    //   .addClass('planned-task-resource')
    //   .text(resource ? resource.text : '')
    //   .appendTo(wrapper);

    const plannedTaskContainerChild1 = this.renderer.createElement('div');
    this.renderer.addClass(plannedTaskContainerChild1, 'planned-task-progress');
    this.renderer.setAttribute(
      plannedTaskContainerChild1,
      'width',
      `${parseFloat(taskData.Progress) + '%;'}`
    );
    this.renderer.appendChild(plannedTaskContainer, plannedTaskContainerChild1);
    // document
    //   .createElement('div')
    //   .addClass('planned-task-progress')
    //   .attr('style', 'width:' + parseFloat(taskData.Progress) + '%;')
    //   .appendTo(plannedTaskContainer);
  }

  appendActualTask(taskData: any, taskWidth: any, container: any) {
    var taskRange = taskData.EndDate - taskData.StartDate;
    var tickSize = taskWidth / taskRange;
    var actualTaskOffset = 5;
    // new Date(taskData.start) - taskData.taskPlannedStartDate;
    var actualTaskRange =
      // new Date(taskData.end) - new Date(taskData.start);
      10;

    var actualTaskWidth = Math.round(actualTaskRange * tickSize) + 'px';
    var actualTaskLeftPosition = Math.round(actualTaskOffset * tickSize) + 'px';

    const actualTaskContainer = this.renderer.createElement('div');
    this.renderer.addClass(actualTaskContainer, 'actual-task');
    this.renderer.setAttribute(
      actualTaskContainer,
      'width',
      `${actualTaskWidth + 'px'}`
    );
    this.renderer.setAttribute(
      actualTaskContainer,
      'left',
      actualTaskLeftPosition
    );
    this.renderer.appendChild(container, actualTaskContainer);
    // document
    //   .createElement('div')
    //   .addClass('actual-task')
    //   .attr(
    //     'style',
    //     'width:' + actualTaskWidth + '; left:' + actualTaskLeftPosition
    //   )
    //   .appendTo(container);
  }
}
// dx-gantt.dx-widget.dx-visibility-change-handler.dx-gantt
