import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable, shareReplay } from 'rxjs';
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

  private _dataSubject = new BehaviorSubject<any>(null);
  data$: Observable<any> = this._dataSubject;
  get data() {
    return this._dataSubject.value;
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
  getData(): any {
    if (this._dataSubject.value === null) {
      this.dataLoading$.next(true);
    }
    return this.http
      .get<any>(this.dummyApi + '/dummyData')
      .pipe(
        shareReplay(1),
        finalize(() => this.dataLoading$.next(false))
      )
      .subscribe((response) => {
        if (
          JSON.stringify(this._dataSubject.value) !== JSON.stringify(response)
        )
          this._dataSubject.next(response[0]);
      });
  }

  updateData(newData: any): Observable<any> {
    let obs$: Observable<any> = this.http
      .put<any>(this.dummyApi + '/dummyData', newData)
      .pipe(shareReplay(1));
    obs$.subscribe(() => {
      this._dataSubject.next(newData);
    });
    return obs$;
  }
}
