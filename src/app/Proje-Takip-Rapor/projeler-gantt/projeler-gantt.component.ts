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
import { Observable } from 'rxjs';
import dxTreeList from 'devextreme/ui/tree_list';
@Component({
  selector: 'app-projeler-gantt',
  templateUrl: './projeler-gantt.component.html',
  styleUrls: ['./projeler-gantt.component.css'],
})
export class ProjelerGanttComponent implements OnInit {
  // default gantt dataSource
  tasks!: Task[];
  dependencies!: Dependency[];
  resources!: Resource[];
  resourceAssignments!: ResourceAssignment[];

  // gantt properties
  scaleType!: string;

  //custom gantt settings
  titlePosition!: string;
  showResources!: any;
  showDependencies!: any;
  showDifferentTaskContent!: any;
  startDateRange!: any;
  endDateRange!: any;

  // custom toolbar settings
  infoPopupButtonOptions: any;
  saveDataButtonOptions: any;
  exportButtonOptions: any;

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

  // Task Details Form/Popup
  customTaskDetailsForm: any;
  oldCustomTaskDetailsForm: any;
  submitButtonOptions = {
    text: 'Görev Detaylarını Kaydet',
    useSubmitBehavior: true,
  };
  isTaskDetailsFormPopupVisible = false;

  // Obs
  data$!: Observable<any>;
  dataLoading$!: Observable<any>;
  constructor(
    private ganttDataService: GanttDataService,
    private ref: ChangeDetectorRef,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  // Dom
  @ViewChild(DxGanttComponent, { static: false })
  gantt!: DxGanttComponent;

  ngOnInit(): void {
    // obs & data
    this.ganttDataService.getData();
    this.data$ = this.ganttDataService.data$;
    this.dataLoading$ = this.ganttDataService.dataLoading$;
    this.data$.subscribe((data) => {
      if (data) {
        // dataSources
        this.tasks = data?.tasks;
        this.dependencies = data?.dependencies;
        this.resources = data?.resources;
        this.resourceAssignments = data?.resourceAssignments;
        // Export Options
        this.startDate = data.tasks[0]?.start;
        this.endDate = data.tasks[0]?.end;
      }
    });

    // gantt properties
    this.scaleType = 'months';

    //custom gantt settings
    this.titlePosition = 'outside';
    this.showResources = true;
    this.showDependencies = false;
    this.showDifferentTaskContent = true;
    this.startDateRange = new Date(2018, 11, 1);
    this.endDateRange = new Date(2019, 11, 1);

    // export options/filters
    this.formatBoxValue = this.formats[0];
    this.landscapeCheckBoxValue = true;
    this.exportModeBoxValue = this.exportModes[0];
    this.dateRangeBoxValue = this.dateRanges[1];
    this.startTaskIndex = 0;
    this.endTaskIndex = 3;
    this.customRangeDisabled = true;
    this.exportButtonOptions = {
      hint: 'Export to PDF',
      icon: 'exportpdf',
      stylingMode: 'text',
      onClick: () => this.exportButtonClick(),
    };

    // sorting
    this.sortingMode = 'multiple';
    this.showSortIndexes = true;

    // toolbar
    this.saveDataButtonOptions = {
      text: 'Tüm Verileri Kaydet',
      icon: 'save',
      stylingMode: 'text',
      onClick: () => {
        this.saveGantt();
      },
    };
  }

  onCustomCommandClick(e: any) {
    if (e.name == 'ToggleDisplayOfResources') {
      this.showResources = !this.showResources;
    }
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

  // toolbar
  saveGantt() {
    if (confirm('Tüm Veriler Kaydedilsin Mi?)')) {
    }
  }

  // Forms/Popups
  onTaskEditDialogShowing(e: any) {
    e.cancel = true;
    this.oldCustomTaskDetailsForm = { ...this.customTaskDetailsForm };
    this.customTaskDetailsForm = this.tasks.find((t) => t.id === Number(e.key));
    this.isTaskDetailsFormPopupVisible = true;
  }
  resetForm(e: any) {
    this.customTaskDetailsForm = this.oldCustomTaskDetailsForm;
  }
  onTaskUpdated(e: any) {
    if (e.key != 0) {
      // your code
    }
  }

  onSaveForm(e: any) {
    e.preventDefault();
    if (confirm('Görev / İş Detayını Kaydet!') === true) {
      // const { resourceId, ...everythingExceptresourceId } =
      //   this.customTaskDetailsForm;
      // const b = everythingExceptresourceId;
      // this.gantt.instance.updateTask(this.customTaskDetailsForm.id, {
      //   ...everythingExceptresourceId,
      // });
    }
    // else {
    //   this.customTaskDetailsForm = this.oldCustomTaskDetailsForm;
    // }
    this.isTaskDetailsFormPopupVisible = false;
  }

  // Custom Task Content Template
  plannedTaskProgressWidthDefiner(item: any) {
    let progressWidth = `${parseFloat(item.taskData.progress) + '%'}`;
    return progressWidth;
  }
  actualTaskWidthDefiner(item: any) {
    var taskRange = item.taskData.end - item.taskData.start;
    var tickSize = item.taskSize.width / taskRange;
    var actualTaskOffset = item.taskData.start - item.taskData.plannedStart;
    var actualTaskRange = item.taskData.end - item.taskData.start;

    var actualTaskWidth = Math.round(actualTaskRange * tickSize);
    var actualTaskLeftPosition = Math.round(actualTaskOffset * tickSize);
    return {
      'width.px': actualTaskWidth,
      'left.px': 55,
    };
  }

  repaint() {
    this.gantt.instance.repaint();
    // this.treeColor();
  }

  //tree list
  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.treeColor();
  //   }, 100);
  // }
  //tree list

  // ccc() {
  //   let rows = document.getElementsByClassName('dx-row');
  //   if (rows.length > 0) {
  //     for (let i = 0; i < rows.length; i++) {
  //       let row = rows[i];
  //       if (row.innerHTML.includes('Tasarımda22')) {
  //         console.log(row);
  //         row.setAttribute('style', 'background-color: red;');
  //       }
  //     }
  //   }
  // }

  //tree list
  // treeColor() {
  //   let gant: any = this.gantt.instance;
  //   let tree = gant['_treeList'] as dxTreeList;
  // tree.on('rowPrepared', (e: any) => {
  //   if (e.rowType == 'data') {
  //     console.log(e);
  //     e.rowElement.cells[0].style['background-color'] = 'red';
  //     e.rowElement.cells[0].style['color'] = 'white';
  //   }
  // });

  // tree.option('onSelectionChanged', () => {
  //   this.ccc();
  // });
  // tree.on('contentReady', () => {
  //   this.ccc();
  // });
  // cellTemplate: function(element, info) {
  //              element.append("<div>" + info.text + "</div>")
  //                     .css("color", "blue");
  // tree._templateManager.addDefaultTemplates({
  //   cellTemplate: function (element: any, info: any) {
  //     element.append('<div>' + info.text + '</div>').css('color', 'blue');
  //   },
  // });

  //treelist
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

  // class } end
}
