import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  finalize,
  forkJoin,
  Observable,
  shareReplay,
} from 'rxjs';
import {
  Task,
  Dependency,
  Resource,
  ResourceAssignment,
} from '../model/gantt-data';

@Injectable({
  providedIn: 'root',
})
export class GanttDataService {
  dummyApi = 'http://localhost:3000';

  // Data
  dataLoading$ = new BehaviorSubject<boolean>(false);

  private _ganttDataSubject = new BehaviorSubject<any>(null);
  ganttData$: Observable<any> = this._ganttDataSubject;
  get ganttData() {
    return this._ganttDataSubject.value;
  }

  private _ERPbasicDataSubject = new BehaviorSubject<any>(null);
  ERPbasicData$: Observable<any> = this._ERPbasicDataSubject;
  get ERPbasicData() {
    return this._ERPbasicDataSubject.value;
  }

  // // Tasks
  // private _tasksSubject = new BehaviorSubject<any>(null);
  // tasks$: Observable<any> = this._tasksSubject;
  // get tasks() {
  //   return this._tasksSubject.value;
  // }

  // // Dependencies
  // private _dependenciesSubject = new BehaviorSubject<any>(null);
  // dependencies$: Observable<any> = this._dependenciesSubject;
  // get dependencies() {
  //   return this._dependenciesSubject.value;
  // }
  // // Resources
  // private _resourcesSubject = new BehaviorSubject<any>(null);
  // resources$: Observable<any> = this._resourcesSubject;
  // get resources() {
  //   return this._resourcesSubject.value;
  // }
  // // Resource Assignments
  // private _resourceAssignmentsSubject = new BehaviorSubject<any>(null);
  // resourceAssignments$: Observable<any> = this._resourceAssignmentsSubject;
  // get resourceAssignments() {
  //   return this._resourceAssignmentsSubject.value;
  // }

  constructor(private http: HttpClient) {}
  getData() {
    if (
      this._ganttDataSubject === null ||
      this._ERPbasicDataSubject.value === null
    ) {
      this.dataLoading$.next(true);
    }
    forkJoin({
      requestOne: this.http.get<any>(this.dummyApi + '/ganttData'),
      requestTwo: this.http.get<any>(this.dummyApi + '/ERPbasicData'),
    })
      .pipe(
        shareReplay(1),
        finalize(() => this.dataLoading$.next(false))
      )
      .subscribe(({ requestOne, requestTwo }) => {
        if (
          JSON.stringify(this._ganttDataSubject.value) !==
          JSON.stringify(requestOne)
        ) {
          this._ganttDataSubject.next(requestOne);
        }
        if (
          JSON.stringify(this._ERPbasicDataSubject.value) !==
          JSON.stringify(requestTwo)
        ) {
          this._ERPbasicDataSubject.next(requestTwo);
        }
      });
  }

  updateGanttData(newData: any) {
    this.http
      .patch<any>(this.dummyApi + '/ganttData/1/tasks', newData.tasks)
      .pipe(shareReplay(1))
      .subscribe();
      this.http
      .patch<any>(this.dummyApi + '/ganttData/1/dependencies', newData.dependencies)
      .pipe(shareReplay(1))
      .subscribe();
      this.http
      .patch<any>(this.dummyApi + '/ganttData/1/resources', newData.resources)
      .pipe(shareReplay(1))
      .subscribe();
      this.http
      .patch<any>(this.dummyApi + '/ganttData/1/resourceAssignments', newData.resourceAssignments)
      .pipe(shareReplay(1))
      .subscribe();
  }
}
