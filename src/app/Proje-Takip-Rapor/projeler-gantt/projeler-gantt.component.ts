import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { DxGanttComponent, DxTreeListComponent } from 'devextreme-angular';
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
import * as moment from 'moment';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
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

  // B.D: Modelleri Yapılabilir Belki
  taskStatusList!: any;
  taskOperationList!: any;
  dataSourceFromtaskOperationList!: any; // B.D: tip datasource olabilir
  dataSourceFromtaskStatusList!: any;
  dataSourceFromresources!: any;
  companies: any = ['Roboplas', 'Roboter', 'Roboplas NA'];
  customers: any = [
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
  columnList: any[] = [
    {
      id: 0,
      dataField: 'id',
      caption: 'ID',
      isVisible: true,
    },
    {
      id: 1,
      dataField: 'parentId',
      caption: 'Üst ID',
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
      dataField: 'resourceId',
      caption: 'Kaynak ID',
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
  columnListDataSource: any = new DataSource({
    store: new ArrayStore({
      data: this.columnList,
      key: 'id',
    }),
  });
  columnListTagBoxListValue: any[] = this.columnList
    .filter((column: any) => column.isVisible == true)
    .map((column: any) => column.id);

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
  refreshGanttButtonOptions: any;
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
  customTaskDetailsForm: any; // model yapılabilir
  oldCustomTaskDetailsForm: any;
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
    private ref: ChangeDetectorRef,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  // instances
  @ViewChild(DxGanttComponent, { static: false })
  gantt!: DxGanttComponent;
  // @ViewChild(DxTreeListComponent, { static: false }) treeList!: DxTreeListComponent;

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
            key: 'id',
          }),
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
    this.showDifferentTaskContent = 'Görünüm-1';
    this.startDateRange = new Date(new Date().getFullYear() - 2, 0);
    this.endDateRange = new Date(new Date().getFullYear() + 2, 0);

    // gantt form
    this.customTaskDetailsForm = {
      id: null,
      parentId: null,
      title: null,
      start: null,
      end: null,
      actualDuration: null,
      progress: null,
      taskPlannedStartDate: null,
      taskPlannedEndDate: null,
      plannedDuration: null,
      taskCompany: null,
      taskIsRevision: null,
      taskCustomer: null,
      taskNotes: null,
      taskStatus: null,
      routeLevelNumber: null,
      resourceId: null,
      resourceText: null,
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
  onTaskEditDialogShowing(e: any) {
    e.cancel = true;
    // New Task Form
    if (
      !this.tasks
        .find((task) => task.id === e.key)
        ?.hasOwnProperty('taskPlannedStartDate')
    ) {
      this.customTaskDetailsForm = this.tasks.find((task) => task.id === e.key);
      // // B.D: Parent yoksa e.parentId gelmiyor, duruma göre sonra ekle
      // if (!this.customTaskDetailsForm['parentId']) {
      //   this.customTaskDetailsForm['parentId'] = 0;
      // }
      this.customTaskDetailsForm = {
        ...this.customTaskDetailsForm,
        title: null,
        taskPlannedStartDate: new Date(this.customTaskDetailsForm.start),
        taskPlannedEndDate: new Date(this.customTaskDetailsForm.end),
        plannedDuration: 0,
        actualDuration: this.dateDaysDiffCalculator(
          e.values.start,
          e.values.end
        ),
        taskCompany: 'Roboplas',
        taskCustomer: 'Henüz Belirlenmedi',
        taskStatus: 'Henüz Belirlenmedi',
        taskNotes: 'Buraya Not Girebilirsiniz!',
        taskIsRevision: false,
        resourceId: 10,
        resourceText: 'Henüz Belirlenmedi',
      };
    }
    // Update Task Form
    else {
      let selectedRowData = this.tasks.find((task) => task.id === e.key);
      this.customTaskDetailsForm = {
        ...selectedRowData,
        resourceId: this.resources.find(
          (resource) =>
            resource.id ==
            this.resourceAssignments.find((ra) => ra.taskId == e.key)
              ?.resourceId
        )?.id,
        resourceText: this.resources.find(
          (resource) =>
            resource.id ==
            this.resourceAssignments.find((ra) => ra.taskId == e.key)
              ?.resourceId
        )?.text,
      };
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
        (resource) => resource.id == this.customTaskDetailsForm.resourceId
      )?.text;
      const {
        resourceId,
        resourceText,
        start,
        end,
        taskPlannedStartDate,
        taskPlannedEndDate,
        ...everythingExceptresourceInfo
      } = this.customTaskDetailsForm;
      this.gantt.instance.updateTask(this.customTaskDetailsForm.id, {
        ...everythingExceptresourceInfo,
        start: new Date(start),
        end: new Date(end),
        taskPlannedStartDate: new Date(taskPlannedStartDate),
        taskPlannedEndDate: new Date(taskPlannedEndDate),
        resourceId: resourceId,
        resourceText: resourceText,
        // B.D: parentId: 0, eklenebilir eğer parent property yok ise... bunu en son ekle, problem çıkmazsa
      });
      let resourceAssignmentIndex = this.resourceAssignments.findIndex(
        (ra) => ra.taskId === this.customTaskDetailsForm.id
      );
      if (resourceAssignmentIndex === -1) {
        this.resourceAssignments.push({
          id: this.resourceAssignments.length,
          taskId: this.customTaskDetailsForm.id,
          resourceId: resourceId,
        });
      } else {
        this.resourceAssignments[resourceAssignmentIndex].resourceId =
          resourceId;
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
  }
  onGanttTaskInserted(e: any) {
    e.cancel
    let taskIndex = this.tasks.findIndex((task) => task.id === e.key);

    if (!this.tasks[taskIndex].hasOwnProperty('parentId')) {
      // bu akışı bozabilir, kontrol et
      this.tasks[taskIndex]['parentId'] = 0;
    }
    // id ataması
    // B.D: id 0 verilemiyor çünkü devextreme ganttcomponenti 0 idli taskı göstermiyor
    let filteredTasks = this.tasks.filter(
      (task) => typeof task.id === 'number'
    );
    let objMax = filteredTasks.reduce((max, current) =>
      max.id > current.id ? max : current
    );
    this.tasks[taskIndex]['id'] = objMax.id + 1;
    let gantt: any = this.gantt.instance;
      let ganttTreeList = gantt['_treeList'] as dxTreeList;
    let test = 'test';

  }
  // TreeList Columns
  onColumListTagBoxContentReady(e: any) {
    // B.D: Gerek Kalmadı
  }
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
