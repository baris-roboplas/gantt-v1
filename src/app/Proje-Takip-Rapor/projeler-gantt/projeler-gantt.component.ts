import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {
  DxFormComponent,
  DxGanttComponent,
  DxSchedulerComponent,
  DxTreeListComponent,
} from 'devextreme-angular';
import {
  Task,
  Dependency,
  Resource,
  ResourceAssignment,
  TaskStatusList,
  TaskOperationList,
  CustomTaskDetailsForm,
} from './model/gantt-data';

import { GanttDataService } from './services/gantt-data.service';

import { exportGantt as exportGanttToPdf } from 'devextreme/pdf_exporter';
import 'jspdf-autotable';
import jsPDF from 'jspdf';
import { Observable } from 'rxjs';
import dxTreeList from 'devextreme/ui/tree_list';
import * as moment from 'moment';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
@Component({
  selector: 'app-projeler-gantt',
  templateUrl: './projeler-gantt.component.html',
  styleUrls: ['./projeler-gantt.component.css'],
})
export class ProjelerGanttComponent implements OnInit {
  // Default Gantt DataSources
  tasks!: Task[];
  dependencies!: Dependency[];
  resources!: Resource[];
  resourceAssignments!: ResourceAssignment[];
  contextMenuItems = [
    {
      name: 'addTask',
      text: 'Yeni Iş Ekle',
    },
    {
      name: 'taskdetails',
      text: 'Iş Detay Bak',
    },
    {
      name: 'deleteTask',
      text: 'Işi Sil',
    },
    {
      beginGroup: true,
      name: 'addDefaultSubTasks',
      text: 'Varsayılan Alt Işleri Ekle',
      icon: 'hierarchy',
    },
  ];

  taskStatusList!: TaskStatusList[];
  taskOperationList!: TaskOperationList;
  dataSourceFromtaskOperationList!: DataSource;
  dataSourceFromtaskStatusList!: DataSource;
  dataSourceFromresources!: DataSource;
  companies = ['Roboplas', 'Roboter', 'Roboplas NA'];
  customers = [
    'Henüz Belirlenmedi',
    '"Erp"de Yok',
    'TURAN',
    'Customer-1',
    'Customer-2',
    'Customer-3',
    'Customer-4',
    'Customer-5',
    'Customer-6',
    'Customer-7',
    'Customer-8',
    'Customer-9',
    'Customer-10',
  ];

  // column settings
  columnList = [
    {
      id: 0,
      dataField: 'taskKey',
      caption: 'TASK KEY',
      isVisible: true,
    },
    {
      id: 1,
      dataField: 'parentTaskKey',
      caption: 'PARENT TASK KEY',
      isVisible: true,
    },
    {
      id: 2,
      dataField: 'title',
      caption: 'Proje/Görev/Operasyon',
      isVisible: true,
    },
    {
      id: 3,
      dataField: 'taskPlannedStartDate',
      caption: 'Planlanmış Başlangıç',
      isVisible: true,
    },
    {
      id: 4,
      dataField: 'taskPlannedEndDate',
      caption: 'Planlanmış Bitiş',
      isVisible: true,
    },

    {
      id: 5,
      dataField: 'plannedDuration',
      caption: 'Planlanan Süre',
      isVisible: false,
    },
    {
      id: 6,
      dataField: 'start',
      caption: 'Güncel Başlangıç',
      isVisible: true,
    },
    {
      id: 7,
      dataField: 'end',
      caption: 'Güncel Bitiş',
      isVisible: true,
    },
    {
      id: 8,
      dataField: 'actualDuration',
      caption: 'Güncel Süre',
      isVisible: false,
    },
    {
      id: 9,
      dataField: 'progress',
      caption: 'Tamamlanma %',
      isVisible: false,
    },
    {
      id: 10,
      dataField: 'taskCompany',
      caption: 'Firma',
      isVisible: false,
    },
    {
      id: 11,
      dataField: 'taskCustomer',
      caption: 'Müşteri',
      isVisible: false,
    },
    {
      id: 12,
      dataField: 'taskStatus',
      caption: 'Durum',
      isVisible: false,
    },
    {
      id: 13,
      dataField: 'taskNotes',
      caption: 'Notlar',
      isVisible: true,
    },
    {
      id: 14,
      dataField: 'taskIsRevision',
      caption: 'Revizyon?',
      isVisible: false,
    },
    {
      id: 15,
      dataField: 'resourceKey',
      caption: 'Kaynak Key',
      isVisible: true,
    },
    {
      id: 16,
      dataField: 'resourceText',
      caption: 'Kaynak Ismi',
      isVisible: true,
    },
    {
      id: 17,
      dataField: 'routeLevelNumber',
      caption: 'Rota Seviyesi',
      isVisible: true,
    },
  ];
  columnListDataSource: DataSource = new DataSource({
    store: new ArrayStore({
      data: this.columnList,
      key: 'id',
    }),
  });
  columnListTagBoxListValue = this.columnList
    .filter((column: any) => column.isVisible == true)
    .map((column: any) => column.id);

  // gantt properties
  scaleType!: string;

  //custom gantt settings
  titlePosition!: string;
  showResources!: any;
  showDependencies!: any;
  taskContentChoice!: string;
  startDateRange!: any;
  endDateRange!: any;

  // custom toolbar settings
  saveDataButtonOptions!: object;
  refreshGanttButtonOptions!: object;
  exportButtonOptions!: object;

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
  customStartDate!: any;
  customEndDate!: any;
  customRangeDisabled!: boolean;

  // sorting
  sortingMode!: 'single' | 'multiple' | 'none';
  showSortIndexes!: boolean;

  // Task Details Form/Popup
  customTaskDetailsForm!: CustomTaskDetailsForm; // model yapılabilir
  oldCustomTaskDetailsForm!: CustomTaskDetailsForm;
  submitButtonOptions = {
    text: 'Görev Detaylarını Kaydet',
    useSubmitBehavior: true,
    type: 'default',
  };
  isTaskDetailsFormPopupVisible = false;

  // Obs
  ganttData$!: Observable<any>;
  ERPbasicData$!: Observable<any>;
  dataLoading$!: Observable<any>;
  constructor(
    private ganttDataService: GanttDataService,
    private ref: ChangeDetectorRef
  ) {}

  // instances
  @ViewChild(DxGanttComponent, { static: false })
  gantt!: DxGanttComponent;
  @ViewChild(DxFormComponent, { static: false }) DxForm!: DxFormComponent;
  @ViewChild(DxTreeListComponent, { static: false })
  treeList!: DxTreeListComponent;
  @ViewChild(DxSchedulerComponent, { static: false })
  scheduler!: DxSchedulerComponent;

  ngOnInit(): void {
    // obs & data
    this.ganttDataService.getData();
    this.ganttData$ = this.ganttDataService.ganttData$;
    this.ERPbasicData$ = this.ganttDataService.ERPbasicData$;
    this.dataLoading$ = this.ganttDataService.dataLoading$;

    // dataSources
    this.ERPbasicData$.subscribe((data) => {
      if (data) {
        this.taskStatusList = data[0]?.taskStatusList;
        this.taskOperationList = data[0]?.taskOperationList;
        this.dataSourceFromtaskOperationList = new DataSource({
          store: new ArrayStore({
            data: data[0].taskOperationList,
            key: 'id',
          }),
          group: 'routeLevelName',
        });
        this.dataSourceFromtaskStatusList = new DataSource({
          store: new ArrayStore({
            data: data[0].taskStatusList,
            key: 'id',
          }),
          group: 'statusGroup',
        });
      }
    });
    this.ganttData$.subscribe((data) => {
      if (data) {
        this.tasks = data[0]?.tasks;
        this.dependencies = data[0]?.dependencies;
        this.resources = data[0]?.resources;
        this.resourceAssignments = data[0]?.resourceAssignments;

        this.dataSourceFromresources = new DataSource({
          store: new ArrayStore({
            data: data[0].resources,
            key: 'resourceKey',
          }),
          // B.D resrouceType ??????
          group: 'resourceType',
        });

        // Export Options
        // this.startDate = data.tasks[0]?.start;
        // this.endDate = data.tasks[0]?.end;
      }
    });

    // gantt properties
    this.scaleType = 'months';

    //custom gantt settings
    this.titlePosition = 'outside';
    this.showResources = true;
    this.showDependencies = true;
    this.taskContentChoice = 'Görünüm-1';
    this.startDateRange = new Date(new Date().getFullYear() - 2, 0);
    this.endDateRange = new Date(new Date().getFullYear() + 2, 0);

    // gantt form
    this.customTaskDetailsForm = {
      taskKey: null,
      parentTaskKey: null,
      title: null,
      start: null,
      end: null,
      actualDuration: null,
      progress: null,
      taskPlannedStartDate: null,
      taskPlannedEndDate: null,
      plannedDuration: null,
      taskIsRevision: false,
      taskCompany: null,
      taskCustomer: null,
      taskStatus: null,
      taskNotes: null,
      resourceKey: null,
      // B.D: resourcetext gerek yok gibi, sil
      resourceText: null,
      routeLevelNumber: null,
    };

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
    this.refreshGanttButtonOptions = {
      text: 'Gantt Yenile',
      icon: 'refresh',
      stylingMode: 'text',
      onClick: () => {
        this.refreshGantt();
      },
    };
  }

  onCustomCommandClick(e: any) {
    if (e.name === 'addDefaultSubTasks') {
      this.addMassTasks();
    }
  }
  addMassTasks() {}
  onContextMenuPreparing(e: any) {}

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
        endIndex: this.endTaskIndex - 1,
        startDate: this.customStartDate,
        endDate: this.customEndDate,
      };
    }
    // B.D: GanttComponent "all" durumunda start ve end viewlerin alınmasını kendi hallediyor ama bu özellik deprecated olmuş dolayısıyla ne olur ne olmaz diye bu şekilde yazdım.
    if (dataRangeMode === 'all') {
      dataRange = {
        startDate: this.startDateRange,
        endDate: this.endDateRange,
      };
    }

    // B.D: GanttComponent "visible" durumunda start ve end viewlerin alınmasını kendi hallediyor bu özellik deprecated olmuş ama görünen ganttview'ın start ve end değerlerini almak için bir yöntem bulamadım henüz.
    // if(dataRangeMode === 'visible') {}

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
  // B.D: burası ne?
  onDateRangeBoxSelectionChanged(e: any) {
    this.customRangeDisabled = e.value !== 'Custom';
    this.ref.detectChanges();
  }

  // toolbar
  saveGantt() {
    if (confirm('Tüm Veriler Kaydedilsin Mi?)')) {
      this.ganttDataService.updateGanttData({
        tasks: this.tasks,
        dependencies: this.dependencies,
        resources: this.resources,
        resourceAssignments: this.resourceAssignments,
      });
    }
  }

  refreshGantt() {
    this.gantt.instance.refresh();
  }

  // Forms/Popups
  dateDaysDiffCalculator(start: string, end: string) {
    // To calculate the time difference of two dates
    var Difference_In_Time =
      new Date(end).getTime() - new Date(start).getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return Math.round(Difference_In_Days);
  }
  onSelectionChanged(e: any) {}
  onContentReady(e: any) {}
  onInitialized(e: any) {}
  onTaskEditDialogHiding(e: any) {

  }
  onTaskEditDialogHidden(e: any) {
    // this.DxForm.instance.getEditor('routeLevelNumber')?.option('value', null);
    // formRef.current.instance.getEditor("birthDate").option("isValid", true);


    this.DxForm?.instance.resetValues();
    // B.D: nedense resetvalues aşağıdaki propertyleri resetlemiyor, bu yüzden aşağıdaki gibi manuel null yazdım.
    this.customTaskDetailsForm.resourceText = null;
    this.customTaskDetailsForm.taskKey = null;
    this.customTaskDetailsForm.taskNotes = null;
    this.customTaskDetailsForm.title = null;
  }
  onTaskEditDialogShowing(e: any) {
    e.cancel = true;
    let findCurrentTaskObj = this.tasks.find((task) => task.taskKey === e.key);
    // New Task Form
    if (!findCurrentTaskObj?.hasOwnProperty('taskPlannedStartDate')) {
      // initial form values to be shown
      this.customTaskDetailsForm = {
        ...this.customTaskDetailsForm,
        ...findCurrentTaskObj,
        taskPlannedStartDate: new Date(e.values.start),
        taskPlannedEndDate: new Date(e.values.end),
        plannedDuration: this.dateDaysDiffCalculator(
          e.values.start,
          e.values.end
        ),
        actualDuration: this.dateDaysDiffCalculator(
          e.values.start,
          e.values.end
        ),
        title: null,
      };
      let test1 = 'test1';
    }
    // Update Task Form
    else {
      // form sync with data
      let selectedRowData = findCurrentTaskObj;
      this.customTaskDetailsForm = {
        ...this.customTaskDetailsForm,
        ...selectedRowData,
        resourceKey: this.resources.find(
          (resource) =>
            resource.resourceKey ==
            this.resourceAssignments.find((ra) => ra.taskKey == e.key)
              ?.resourceKey
        )?.resourceKey,
        resourceText: this.resources.find(
          (resource) =>
            resource.resourceKey ==
            this.resourceAssignments.find((ra) => ra.taskKey == e.key)
              ?.resourceKey
        )?.text,
      };
      let test6 = 'test';
    }

    this.oldCustomTaskDetailsForm = { ...this.customTaskDetailsForm };
    this.isTaskDetailsFormPopupVisible = true;
    let test2 = 'test';
  }
  // B.D: TEST EVENTLARI BURAYA YAZILDI
  onGanttContentReady(e: any) {}
  onGanttTaskUpdating(e: any) {}
  onGanttTaskUpdated(e: any) {}
  onGanttScaleCellPrepared(e: any) {}
  onGanttOptionChanged(e: any) {}
  onFieldDataChanged(e: any) {
    if (e.dataField === 'start') {
      this.customTaskDetailsForm.actualDuration = this.dateDaysDiffCalculator(
        e.value,
        this.customTaskDetailsForm.end
      );
    }
    if (e.dataField === 'end') {
      this.customTaskDetailsForm.actualDuration = this.dateDaysDiffCalculator(
        this.customTaskDetailsForm.start,
        e.value
      );
    }
    if (e.dataField === 'taskPlannedStartDate') {
      this.customTaskDetailsForm.plannedDuration = this.dateDaysDiffCalculator(
        e.value,
        this.customTaskDetailsForm.taskPlannedEndDate
      );
    }
    if (e.dataField === 'taskPlannedEndDate') {
      this.customTaskDetailsForm.plannedDuration = this.dateDaysDiffCalculator(
        this.customTaskDetailsForm.taskPlannedStartDate,
        e.value
      );
    }
  }

  onSaveForm(e: any) {
    e.preventDefault();
    if (confirm('Proje/Görev/Operasyon Kaydet!') === true) {
      this.customTaskDetailsForm.resourceText = this.resources.find(
        (resource) =>
          resource.resourceKey == this.customTaskDetailsForm.resourceKey
      )?.text;
      const {
        resourceKey,
        resourceText,
        start,
        end,
        taskPlannedStartDate,
        taskPlannedEndDate,
        ...everythingExceptresourceInfo
      } = this.customTaskDetailsForm;
      this.gantt.instance.updateTask(this.customTaskDetailsForm.taskKey, {
        ...everythingExceptresourceInfo,
        start: new Date(start),
        end: new Date(end),
        taskPlannedStartDate: new Date(taskPlannedStartDate),
        taskPlannedEndDate: new Date(taskPlannedEndDate),
        resourceKey: resourceKey,
        resourceText: resourceText,
        // B.D: parentId: 0, eklenebilir eğer parent property yok ise... bunu en son ekle, problem çıkmazsa
      });
      let resourceAssignmentIndex = this.resourceAssignments.findIndex(
        (ra) => ra.taskKey === this.customTaskDetailsForm.taskKey
      );
      if (resourceAssignmentIndex === -1) {
        this.resourceAssignments.push({
          raKey: String(this.resourceAssignments.length),
          taskKey: this.customTaskDetailsForm.taskKey,
          resourceKey: resourceKey,
        });
      } else {
        this.resourceAssignments[resourceAssignmentIndex].resourceKey =
          resourceKey;
      }
      // "refresh", ganttview güncellemesi için gerekli, treelist için şu an gerekli gözükmüyor.
      // this.gantt.instance.refresh();
      this.isTaskDetailsFormPopupVisible = false;
    } else {
      this.customTaskDetailsForm = this.oldCustomTaskDetailsForm;
    }
    let test5 = 'test';
  }

  // scale display formatter
  onScaleCellPrepared(e: any) {
    if (e.scaleType === 'weeks') {
      e.scaleElement.innerText = 'CW' + moment(e.startDate).format('w');
    }
  }
  // Custom Task Content Template
  plannedTaskProgressWidthDefiner(item: any) {
    let progressWidth = `${parseFloat(item.taskData.progress) * 100 + '%'}`;
    return progressWidth;
  }

  customProgressFormat(value: number) {
    return value * 100 + '%';
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
  // TreeList Rows
  onGanttTaskInserting(e: any) {
    e.values = {
      ...e.values,
      title: 'Yeni Proje/Görev/Operasyon',
    };
    // delete person.color
  }
  onGanttTaskInserted(e: any) {
    e.cancel;
    let taskIndex = this.tasks.findIndex((task) => task.taskKey === e.key);

    // B.D: DevExtreme kendi ekliyor, gerek olmadığı için siliyorum
    delete this.tasks[taskIndex].color;

    if (!this.tasks[taskIndex].hasOwnProperty('parentTaskKey')) {
      // bu akışı bozabilir, kontrol et
      this.tasks[taskIndex]['parentTaskKey'] = null;
    }
  }
  // TreeList Columns

  onColumnListTagboxValueChanged(e: any) {
    const newValue = e.value;
    this.columnList.forEach((column, index) => {
      if (newValue.includes(column.id)) {
        this.columnList[index].isVisible = true;
      } else {
        this.columnList[index].isVisible = false;
      }
    });
    this.columnListTagBoxListValue.length = 0;
    this.columnList.forEach((column) => {
      if (column.isVisible === true) {
        this.columnListTagBoxListValue.push(column.id);
      }
    });
  }
  onColumListTagBoxMultiTagPreparing(args: any) {
    if (args.text.includes('more')) {
      let formattedText = args.text.replace('more', 'Daha');
      args.text = formattedText;
    }
  }

  repaint() {
    this.gantt.instance.repaint();
    // this.treeColor();
  }

  // B.D: Buna gerek yok gibi, zaten kalıcı olarak çalışmıyor.
  ngAfterViewInit() {
    setTimeout(() => {
      // instances
      // let gantt: any = this.gantt.instance;
      // let ganttTreeList = gantt['_treeList'] as dxTreeList;
      // ganttTreeList.on('onNodesInitialized', (e: any) => {
      //   let test1 = 'test';
      // });
      // ganttTreeList.forEachNode(function (node: any) {
      //   let result1 = node;
      //   let result2 = ganttTreeList.collapseRow(node.key);
      // });
      // this.treeColor();
      // if (this.tasks) {
      //   let dxGanttTaskWrappers = this.el.nativeElement.querySelectorAll(
      //     '.dx-gantt-taskWrapper'
      //   );
      //   // B.D: Sanırım scroll veya responsive değiştikçe tekrar repaint ediyor, bu sebeple row positionları eski haline dönüyor!
      //   for (
      //     let index = 0, increase = 0;
      //     index < dxGanttTaskWrappers.length;
      //     index++, increase = increase + 58
      //   ) {
      //     // let el = this.renderer.selectRootElement(dxGanttTaskWrappers, true);
      //     let toptest1 = 'test';
      //     this.renderer.removeStyle(dxGanttTaskWrappers[index], 'top');
      //     let toptest2 = 'test';
      //     this.renderer.setStyle(
      //       dxGanttTaskWrappers[index],
      //       'top',
      //       `${increase}px`
      //     );
      //     let toptest3 = 'test';
      //     // if ((index === 5)) break;
      //   }
      //   let toptest4 = 'test';
      //   // this.gantt.instance.repaint();
      //   let toptest5 = 'test';
      // }
    }, 1000);
  }

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
