// bunları class değil interface yapmak daha iyi olur mu?
export class Task {
  id!: number;

  parentId!: number;

  title!: string;

  start!: Date;

  end!: Date;

  progress!: number;

  taskPlannedStartDate!: Date;

  taskPlannedEndDate!: Date;

  actualDuration!: number;

  plannedDuration!: number;

  taskCompany!: string;

  taskIsRevision!: boolean;

  taskCustomer!: string;

  taskStatus!: string;

  taskNotes!: string;

  routeLevelNumber!: number;

  // constructor(
  //   id: number,
  //   parentId: number,
  //   title: string,
  //   start: Date,
  //   end: Date,
  //   progress: number,
  //   taskPlannedStartDate: Date,
  //   taskPlannedEndDate: Date,
  //   actualDuration: number,
  //   plannedDuration: number,
  //   taskCompany: string,
  //   taskIsRevision: boolean,
  //   taskCustomer: string,
  //   taskStatus: string,
  //   taskNotes: string,
  //   routeLevelNumber: number
  // ) {
  //   this.id = id;
  //   this.parentId = parentId;
  //   this.title = title;
  //   this.start = start;
  //   this.end = end;
  //   this.progress = progress;
  //   this.taskPlannedStartDate = taskPlannedStartDate;
  //   this.taskPlannedEndDate = taskPlannedEndDate;
  //   this.actualDuration = actualDuration;
  //   this.plannedDuration = plannedDuration;
  //   this.taskCompany = taskCompany;
  //   this.taskIsRevision = taskIsRevision;
  //   this.taskCustomer = taskCustomer;
  //   this.taskStatus = taskStatus;
  //   this.taskNotes = taskNotes;
  //   this.routeLevelNumber = routeLevelNumber;
  // }
}

export class Dependency {
  id!: number;

  predecessorId!: number;

  successorId!: number;

  type!: number;
}

export class Resource {
  id!: number;

  text!: string;
}

export class ResourceAssignment {
  id!: number;

  taskId!: number;

  resourceId!: number;
}

export interface CustomTaskDetailsForm {
  // sonra dahil et
  id: undefined | null | number;
  parentId: undefined | null | number;
  title: undefined | null | string;
  start: undefined | null | Date;
  end: undefined | null | Date;
  actualDuration: undefined | null | number;
  progress: undefined | null | number;
  taskPlannedStartDate: undefined | null | Date;
  taskPlannedEndDate: undefined | null | Date;
  plannedDuration: undefined | null | number;
  taskCompany: undefined | null | string;
  taskIsRevision: undefined | null | boolean;
  taskCustomer: undefined | null | string;
  taskNotes: undefined | null | string;
  taskStatus: undefined | null | string;
  routeLevelNumber: undefined | null | number;
  resourceId: undefined | null | number;
  resourceText: undefined | null | string;
}

// {
//   "dummyData": [
//     {
//       "tasks": [
//         {
//           "id": 1,
//           "parentId": 0,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 2,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 3,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": true,
//           "taskCustomer": "Customer-1",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 1
//         },
//         {
//           "id": 2,
//           "parentId": 1,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Customer-2",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye GeçildiBaşka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 3,
//           "parentId": 2,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 14 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 27 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 4,
//           "parentId": 2,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 5,
//           "parentId": 2,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 3
//         },
//         {
//           "id": 6,
//           "parentId": 2,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 7,
//           "parentId": 2,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 8,
//           "parentId": 1,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 9,
//           "parentId": 8,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 10,
//           "parentId": 8,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 11,
//           "parentId": 8,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 12,
//           "parentId": 8,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 13,
//           "parentId": 8,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 14,
//           "parentId": 8,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 15,
//           "parentId": 8,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 16,
//           "parentId": 8,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 17,
//           "parentId": 8,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 18,
//           "parentId": 1,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 19,
//           "parentId": 18,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 20,
//           "parentId": 18,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 21,
//           "parentId": 18,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 22,
//           "parentId": 18,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 23,
//           "parentId": 18,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 24,
//           "parentId": 18,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 25,
//           "parentId": 18,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 26,
//           "parentId": 1,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 27,
//           "parentId": 26,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 28,
//           "parentId": 26,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 29,
//           "parentId": 26,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 30,
//           "parentId": 26,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 31,
//           "parentId": 26,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 32,
//           "parentId": 26,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 33,
//           "parentId": 1,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 34,
//           "parentId": 33,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 35,
//           "parentId": 33,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 36,
//           "parentId": 33,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 37,
//           "parentId": 36,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 38,
//           "parentId": 36,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 39,
//           "parentId": 36,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 40,
//           "parentId": 36,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 41,
//           "parentId": 36,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 42,
//           "parentId": 36,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 43,
//           "parentId": 33,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 44,
//           "parentId": 43,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 45,
//           "parentId": 43,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 46,
//           "parentId": 43,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 47,
//           "parentId": 43,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 48,
//           "parentId": 43,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 49,
//           "parentId": 1,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 50,
//           "parentId": 49,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 51,
//           "parentId": 49,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 52,
//           "parentId": 49,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 53,
//           "parentId": 49,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 54,
//           "parentId": 49,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 55,
//           "parentId": 49,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 56,
//           "parentId": 49,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 57,
//           "parentId": 49,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 58,
//           "parentId": 1,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 59,
//           "parentId": 58,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 60,
//           "parentId": 58,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 61,
//           "parentId": 58,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 62,
//           "parentId": 58,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 63,
//           "parentId": 58,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 64,
//           "parentId": 58,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 65,
//           "parentId": 58,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 66,
//           "parentId": 58,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 67,
//           "parentId": 58,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 68,
//           "parentId": 1,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 69,
//           "parentId": 68,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 70,
//           "parentId": 68,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 71,
//           "parentId": 68,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 72,
//           "parentId": 68,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 73,
//           "parentId": 68,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 74,
//           "parentId": 68,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 75,
//           "parentId": 1,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 76,
//           "parentId": 75,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 77,
//           "parentId": 75,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 78,
//           "parentId": 75,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 79,
//           "parentId": 75,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 80,
//           "parentId": 75,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 81,
//           "parentId": 75,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 82,
//           "parentId": 1,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 83,
//           "parentId": 82,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 84,
//           "parentId": 82,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         },
//         {
//           "id": 85,
//           "parentId": 82,
//           "title": "Sipariş Süreci",
//           "start": "Wed Mar 13 2022 02:00:00 GMT+0200",
//           "end": "Wed Mar 23 2022 02:00:00 GMT+0200",
//           "actualDuration": 10,
//           "progress": 0.5,
//           "taskPlannedStartDate": "Wed Mar 15 2022 02:00:00 GMT+0200",
//           "taskPlannedEndDate": "Wed Mar 30 2022 02:00:00 GMT+0200",
//           "plannedDuration": 15,
//           "taskCompany": "Roboplas",
//           "taskIsRevision": false,
//           "taskCustomer": "Aselsan",
//           "taskNotes": "Examples Task Notes",
//           "taskStatus": "Tasarımdayken Başka Projeye Geçildi",
//           "routeLevelNumber": 2
//         }
//       ],
//       "dependencies": [
//         {
//           "id": 1,
//           "predecessorId": 3,
//           "successorId": 4,
//           "type": 0
//         },
//         {
//           "id": 2,
//           "predecessorId": 4,
//           "successorId": 5,
//           "type": 0
//         },
//         {
//           "id": 3,
//           "predecessorId": 5,
//           "successorId": 6,
//           "type": 0
//         },
//         {
//           "id": 4,
//           "predecessorId": 6,
//           "successorId": 7,
//           "type": 0
//         },
//         {
//           "id": 5,
//           "predecessorId": 7,
//           "successorId": 9,
//           "type": 0
//         },
//         {
//           "id": 6,
//           "predecessorId": 9,
//           "successorId": 10,
//           "type": 0
//         },
//         {
//           "id": 7,
//           "predecessorId": 10,
//           "successorId": 11,
//           "type": 0
//         },
//         {
//           "id": 8,
//           "predecessorId": 11,
//           "successorId": 12,
//           "type": 0
//         },
//         {
//           "id": 9,
//           "predecessorId": 12,
//           "successorId": 13,
//           "type": 0
//         },
//         {
//           "id": 10,
//           "predecessorId": 13,
//           "successorId": 14,
//           "type": 0
//         },
//         {
//           "id": 11,
//           "predecessorId": 14,
//           "successorId": 15,
//           "type": 0
//         },
//         {
//           "id": 12,
//           "predecessorId": 15,
//           "successorId": 16,
//           "type": 0
//         },
//         {
//           "id": 13,
//           "predecessorId": 16,
//           "successorId": 17,
//           "type": 0
//         },
//         {
//           "id": 14,
//           "predecessorId": 17,
//           "successorId": 19,
//           "type": 0
//         },
//         {
//           "id": 15,
//           "predecessorId": 19,
//           "successorId": 20,
//           "type": 0
//         },
//         {
//           "id": 16,
//           "predecessorId": 20,
//           "successorId": 21,
//           "type": 0
//         },
//         {
//           "id": 17,
//           "predecessorId": 21,
//           "successorId": 22,
//           "type": 0
//         },
//         {
//           "id": 18,
//           "predecessorId": 22,
//           "successorId": 23,
//           "type": 0
//         },
//         {
//           "id": 19,
//           "predecessorId": 23,
//           "successorId": 24,
//           "type": 0
//         },
//         {
//           "id": 20,
//           "predecessorId": 24,
//           "successorId": 25,
//           "type": 0
//         },
//         {
//           "id": 21,
//           "predecessorId": 25,
//           "successorId": 27,
//           "type": 0
//         },
//         {
//           "id": 22,
//           "predecessorId": 27,
//           "successorId": 28,
//           "type": 0
//         },
//         {
//           "id": 23,
//           "predecessorId": 28,
//           "successorId": 29,
//           "type": 0
//         },
//         {
//           "id": 24,
//           "predecessorId": 29,
//           "successorId": 30,
//           "type": 0
//         },
//         {
//           "id": 25,
//           "predecessorId": 31,
//           "successorId": 32,
//           "type": 0
//         },
//         {
//           "id": 26,
//           "predecessorId": 37,
//           "successorId": 38,
//           "type": 0
//         },
//         {
//           "id": 27,
//           "predecessorId": 38,
//           "successorId": 39,
//           "type": 0
//         },
//         {
//           "id": 28,
//           "predecessorId": 39,
//           "successorId": 40,
//           "type": 0
//         },
//         {
//           "id": 29,
//           "predecessorId": 40,
//           "successorId": 41,
//           "type": 0
//         },
//         {
//           "id": 30,
//           "predecessorId": 41,
//           "successorId": 42,
//           "type": 0
//         },
//         {
//           "id": 31,
//           "predecessorId": 42,
//           "successorId": 44,
//           "type": 0
//         },
//         {
//           "id": 32,
//           "predecessorId": 44,
//           "successorId": 45,
//           "type": 0
//         },
//         {
//           "id": 33,
//           "predecessorId": 45,
//           "successorId": 46,
//           "type": 0
//         },
//         {
//           "id": 34,
//           "predecessorId": 46,
//           "successorId": 47,
//           "type": 0
//         },
//         {
//           "id": 35,
//           "predecessorId": 47,
//           "successorId": 48,
//           "type": 0
//         },
//         {
//           "id": 36,
//           "predecessorId": 53,
//           "successorId": 54,
//           "type": 0
//         },
//         {
//           "id": 37,
//           "predecessorId": 54,
//           "successorId": 55,
//           "type": 0
//         },
//         {
//           "id": 38,
//           "predecessorId": 55,
//           "successorId": 56,
//           "type": 0
//         },
//         {
//           "id": 39,
//           "predecessorId": 56,
//           "successorId": 57,
//           "type": 0
//         },
//         {
//           "id": 40,
//           "predecessorId": 59,
//           "successorId": 60,
//           "type": 0
//         },
//         {
//           "id": 41,
//           "predecessorId": 60,
//           "successorId": 61,
//           "type": 0
//         },
//         {
//           "id": 42,
//           "predecessorId": 61,
//           "successorId": 62,
//           "type": 0
//         },
//         {
//           "id": 43,
//           "predecessorId": 63,
//           "successorId": 64,
//           "type": 0
//         },
//         {
//           "id": 44,
//           "predecessorId": 64,
//           "successorId": 65,
//           "type": 0
//         },
//         {
//           "id": 45,
//           "predecessorId": 65,
//           "successorId": 66,
//           "type": 0
//         },
//         {
//           "id": 46,
//           "predecessorId": 66,
//           "successorId": 67,
//           "type": 0
//         },
//         {
//           "id": 47,
//           "predecessorId": 69,
//           "successorId": 70,
//           "type": 0
//         },
//         {
//           "id": 48,
//           "predecessorId": 70,
//           "successorId": 71,
//           "type": 0
//         },
//         {
//           "id": 49,
//           "predecessorId": 71,
//           "successorId": 72,
//           "type": 0
//         },
//         {
//           "id": 50,
//           "predecessorId": 72,
//           "successorId": 73,
//           "type": 0
//         },
//         {
//           "id": 51,
//           "predecessorId": 73,
//           "successorId": 74,
//           "type": 0
//         },
//         {
//           "id": 52,
//           "predecessorId": 74,
//           "successorId": 76,
//           "type": 0
//         },
//         {
//           "id": 53,
//           "predecessorId": 76,
//           "successorId": 77,
//           "type": 0
//         },
//         {
//           "id": 54,
//           "predecessorId": 77,
//           "successorId": 78,
//           "type": 0
//         },
//         {
//           "id": 55,
//           "predecessorId": 78,
//           "successorId": 79,
//           "type": 0
//         },
//         {
//           "id": 56,
//           "predecessorId": 79,
//           "successorId": 80,
//           "type": 0
//         },
//         {
//           "id": 57,
//           "predecessorId": 80,
//           "successorId": 81,
//           "type": 0
//         },
//         {
//           "id": 58,
//           "predecessorId": 81,
//           "successorId": 83,
//           "type": 0
//         },
//         {
//           "id": 59,
//           "predecessorId": 83,
//           "successorId": 84,
//           "type": 0
//         },
//         {
//           "id": 60,
//           "predecessorId": 84,
//           "successorId": 85,
//           "type": 0
//         },
//         {
//           "id": 63,
//           "predecessorId": 1,
//           "successorId": 2,
//           "type": 0
//         }
//       ],
//       "resources": [
//         {
//           "id": 1,
//           "text": "TAS; Tasarımcı-1",
//           "resourceType": "Tasarım Ekibi"
//         },
//         {
//           "id": 2,
//           "text": "TAS; Tasarımcı-2",
//           "resourceType": "Tasarım Ekibi"
//         },
//         {
//           "id": 3,
//           "text": "TAS; Tasarımcı-3",
//           "resourceType": "Tasarım Ekibi"
//         },
//         {
//           "id": 4,
//           "text": "PRO; Proje Yöneticisi-1",
//           "resourceType": "Proje Yöneticileri"
//         },
//         {
//           "id": 5,
//           "text": "PRO; Proje Yöneticisi-2",
//           "resourceType": "Proje Yöneticileri"
//         },
//         {
//           "id": 6,
//           "text": "PRO; Proje Yöneticisi-3",
//           "resourceType": "Proje Yöneticileri"
//         },
//         {
//           "id": 7,
//           "text": "TEK; Çalışan-1",
//           "resourceType": "Teknik Servis Ekibi"
//         },
//         {
//           "id": 8,
//           "text": "TEK; Çalışan-2",
//           "resourceType": "Teknik Servis Ekibi"
//         },
//         {
//           "id": 9,
//           "text": "TEK; Çalışan-3",
//           "resourceType": "Teknik Servis Ekibi"
//         },
//         {
//           "id": 10,
//           "text": "Henüz Belirlenmedi",
//           "resourceType": "Daha Sonra Güncellenecek"
//         },
//         {
//           "id": 11,
//           "text": "ÜRE; Iş Merkezi-1",
//           "resourceType": "Üretım Kaynakları"
//         },
//         {
//           "id": 12,
//           "text": "ÜRE; Iş Merkezi-2",
//           "resourceType": "Üretım Kaynakları"
//         },
//         {
//           "id": 13,
//           "text": "ÜRE; Iş Merkezi-3",
//           "resourceType": "Üretım Kaynakları"
//         },
//         {
//           "id": 14,
//           "text": "DIŞ; Fason-1",
//           "resourceType": "Dış Kaynaklar"
//         },
//         {
//           "id": 15,
//           "text": "DIŞ; Fason-2",
//           "resourceType": "Dış Kaynaklar"
//         },
//         {
//           "id": 16,
//           "text": "DIŞ; Fason-3",
//           "resourceType": "Dış Kaynaklar"
//         },
//         {
//           "id": 18,
//           "text": "SAT; Satış Elemanı-1",
//           "resourceType": "Satış Pazarlama Ekibi"
//         },
//         {
//           "id": 19,
//           "text": "SAT; Satış Elemanı-2",
//           "resourceType": "Satış Pazarlama Ekibi"
//         },
//         {
//           "id": 20,
//           "text": "SAT; Satış Elemanı-3",
//           "resourceType": "Satış Pazarlama Ekibi"
//         },
//         {
//           "id": 21,
//           "text": "TES; Tester-1",
//           "resourceType": "Test Ekibi"
//         },
//         {
//           "id": 22,
//           "text": "TES; Tester-2",
//           "resourceType": "Test Ekibi"
//         },
//         {
//           "id": 23,
//           "text": "TES; Tester-3",
//           "resourceType": "Test Ekibi"
//         },
//         {
//           "id": 24,
//           "text": "Erp'de Yok",
//           "resourceType": "Daha Sonra Güncellenecek"
//         }

//       ],
//       "resourceAssignments": [
//         {
//           "id": 0,
//           "taskId": 3,
//           "resourceId": 1
//         },
//         {
//           "id": 1,
//           "taskId": 4,
//           "resourceId": 1
//         },
//         {
//           "id": 2,
//           "taskId": 5,
//           "resourceId": 2
//         },
//         {
//           "id": 3,
//           "taskId": 6,
//           "resourceId": 2
//         },
//         {
//           "id": 66,
//           "taskId": 7,
//           "resourceId": 2
//         },
//         {
//           "id": 67,
//           "taskId": 8,
//           "resourceId": 2
//         },
//         {
//           "id": 4,
//           "taskId": 9,
//           "resourceId": 3
//         },
//         {
//           "id": 5,
//           "taskId": 10,
//           "resourceId": 3
//         },
//         {
//           "id": 6,
//           "taskId": 11,
//           "resourceId": 2
//         },
//         {
//           "id": 7,
//           "taskId": 12,
//           "resourceId": 2
//         },
//         {
//           "id": 8,
//           "taskId": 12,
//           "resourceId": 3
//         },
//         {
//           "id": 9,
//           "taskId": 13,
//           "resourceId": 3
//         },
//         {
//           "id": 10,
//           "taskId": 14,
//           "resourceId": 2
//         },
//         {
//           "id": 11,
//           "taskId": 15,
//           "resourceId": 1
//         },
//         {
//           "id": 12,
//           "taskId": 15,
//           "resourceId": 2
//         },
//         {
//           "id": 13,
//           "taskId": 16,
//           "resourceId": 2
//         },
//         {
//           "id": 68,
//           "taskId": 17,
//           "resourceId": 2
//         },
//         {
//           "id": 69,
//           "taskId": 18,
//           "resourceId": 2
//         },
//         {
//           "id": 14,
//           "taskId": 19,
//           "resourceId": 3
//         },
//         {
//           "id": 15,
//           "taskId": 20,
//           "resourceId": 3
//         },
//         {
//           "id": 16,
//           "taskId": 21,
//           "resourceId": 3
//         },
//         {
//           "id": 17,
//           "taskId": 22,
//           "resourceId": 1
//         },
//         {
//           "id": 18,
//           "taskId": 23,
//           "resourceId": 1
//         },
//         {
//           "id": 19,
//           "taskId": 24,
//           "resourceId": 1
//         },
//         {
//           "id": 20,
//           "taskId": 24,
//           "resourceId": 2
//         },
//         {
//           "id": 70,
//           "taskId": 25,
//           "resourceId": 2
//         },
//         {
//           "id": 71,
//           "taskId": 26,
//           "resourceId": 2
//         },
//         {
//           "id": 21,
//           "taskId": 27,
//           "resourceId": 4
//         },
//         {
//           "id": 22,
//           "taskId": 28,
//           "resourceId": 4
//         },
//         {
//           "id": 23,
//           "taskId": 29,
//           "resourceId": 4
//         },
//         {
//           "id": 24,
//           "taskId": 30,
//           "resourceId": 4
//         },
//         {
//           "id": 25,
//           "taskId": 31,
//           "resourceId": 4
//         },
//         {
//           "id": 72,
//           "taskId": 32,
//           "resourceId": 2
//         },
//         {
//           "id": 73,
//           "taskId": 33,
//           "resourceId": 2
//         },
//         {
//           "id": 26,
//           "taskId": 34,
//           "resourceId": 5
//         },
//         {
//           "id": 27,
//           "taskId": 35,
//           "resourceId": 5
//         },
//         {
//           "id": 74,
//           "taskId": 36,
//           "resourceId": 2
//         },
//         {
//           "id": 28,
//           "taskId": 37,
//           "resourceId": 5
//         },
//         {
//           "id": 29,
//           "taskId": 38,
//           "resourceId": 5
//         },
//         {
//           "id": 30,
//           "taskId": 39,
//           "resourceId": 5
//         },
//         {
//           "id": 31,
//           "taskId": 40,
//           "resourceId": 5
//         },
//         {
//           "id": 32,
//           "taskId": 41,
//           "resourceId": 5
//         },
//         {
//           "id": 87,
//           "taskId": 42,
//           "resourceId": 2
//         },
//         {
//           "id": 75,
//           "taskId": 43,
//           "resourceId": 2
//         },
//         {
//           "id": 33,
//           "taskId": 44,
//           "resourceId": 5
//         },
//         {
//           "id": 34,
//           "taskId": 45,
//           "resourceId": 5
//         },
//         {
//           "id": 35,
//           "taskId": 46,
//           "resourceId": 5
//         },
//         {
//           "id": 36,
//           "taskId": 47,
//           "resourceId": 5
//         },
//         {
//           "id": 76,
//           "taskId": 48,
//           "resourceId": 2
//         },
//         {
//           "id": 77,
//           "taskId": 49,
//           "resourceId": 2
//         },
//         {
//           "id": 37,
//           "taskId": 50,
//           "resourceId": 6
//         },
//         {
//           "id": 38,
//           "taskId": 51,
//           "resourceId": 6
//         },
//         {
//           "id": 39,
//           "taskId": 52,
//           "resourceId": 6
//         },
//         {
//           "id": 40,
//           "taskId": 53,
//           "resourceId": 6
//         },
//         {
//           "id": 41,
//           "taskId": 54,
//           "resourceId": 6
//         },
//         {
//           "id": 42,
//           "taskId": 55,
//           "resourceId": 6
//         },
//         {
//           "id": 43,
//           "taskId": 56,
//           "resourceId": 6
//         },
//         {
//           "id": 78,
//           "taskId": 57,
//           "resourceId": 2
//         },
//         {
//           "id": 79,
//           "taskId": 58,
//           "resourceId": 2
//         },
//         {
//           "id": 44,
//           "taskId": 59,
//           "resourceId": 7
//         },
//         {
//           "id": 45,
//           "taskId": 60,
//           "resourceId": 7
//         },
//         {
//           "id": 46,
//           "taskId": 61,
//           "resourceId": 7
//         },
//         {
//           "id": 47,
//           "taskId": 62,
//           "resourceId": 7
//         },
//         {
//           "id": 48,
//           "taskId": 63,
//           "resourceId": 7
//         },
//         {
//           "id": 49,
//           "taskId": 64,
//           "resourceId": 7
//         },
//         {
//           "id": 50,
//           "taskId": 65,
//           "resourceId": 7
//         },
//         {
//           "id": 51,
//           "taskId": 66,
//           "resourceId": 7
//         },
//         {
//           "id": 80,
//           "taskId": 67,
//           "resourceId": 2
//         },
//         {
//           "id": 81,
//           "taskId": 68,
//           "resourceId": 2
//         },
//         {
//           "id": 52,
//           "taskId": 69,
//           "resourceId": 2
//         },
//         {
//           "id": 82,
//           "taskId": 70,
//           "resourceId": 2
//         },
//         {
//           "id": 53,
//           "taskId": 71,
//           "resourceId": 8
//         },
//         {
//           "id": 54,
//           "taskId": 72,
//           "resourceId": 8
//         },
//         {
//           "id": 55,
//           "taskId": 73,
//           "resourceId": 8
//         },
//         {
//           "id": 83,
//           "taskId": 74,
//           "resourceId": 2
//         },
//         {
//           "id": 84,
//           "taskId": 75,
//           "resourceId": 2
//         },
//         {
//           "id": 56,
//           "taskId": 76,
//           "resourceId": 8
//         },
//         {
//           "id": 57,
//           "taskId": 77,
//           "resourceId": 8
//         },
//         {
//           "id": 58,
//           "taskId": 78,
//           "resourceId": 8
//         },
//         {
//           "id": 59,
//           "taskId": 79,
//           "resourceId": 8
//         },
//         {
//           "id": 60,
//           "taskId": 80,
//           "resourceId": 8
//         },
//         {
//           "id": 85,
//           "taskId": 81,
//           "resourceId": 2
//         },
//         {
//           "id": 86,
//           "taskId": 82,
//           "resourceId": 2
//         },
//         {
//           "id": 61,
//           "taskId": 83,
//           "resourceId": 2
//         },
//         {
//           "id": 62,
//           "taskId": 84,
//           "resourceId": 2
//         },
//         {
//           "id": 63,
//           "taskId": 85,
//           "resourceId": 2
//         },
//         {
//           "id": 64,
//           "taskId": 1,
//           "resourceId": 1
//         },
//         {
//           "id": 65,
//           "taskId": 2,
//           "resourceId": 18
//         }
//       ],
//       "taskStatusListOrder": [
//         {
//           "statusId": 1,
//           "statusName": "Tasarımdayken Başka Projeye Geçildi",
//           "statusdisplayColor": "Açık Mavi",
//           "statusGroup": "Tasarım Iş Listesi"
//         },
//         {
//           "statusId": 2,
//           "statusName": "Tasarım Bitti",
//           "statusdisplayColor": "Açık Yeşil",
//           "statusGroup": "Tasarım Iş Listesi"
//         },
//         {
//           "statusId": 3,
//           "statusName": "Tasarım İptal",
//           "statusdisplayColor": "Açık Sarı",
//           "statusGroup": "Tasarım Iş Listesi"
//         },
//         {
//           "statusId": 4,
//           "statusName": "Tasarım Beklemede",
//           "statusdisplayColor": "Turuncu",
//           "statusGroup": "Tasarım Iş Listesi"
//         },
//         {
//           "statusId": 5,
//           "statusName": "Tasarım Aşamasında",
//           "statusdisplayColor": "Açık Gri",
//           "statusGroup": "Tasarım Iş Listesi"
//         },
//         {
//           "statusId": 6,
//           "statusName": "Sipariş veya Revizyon Formu Revizyona Uğramıştır",
//           "statusdisplayColor": "Siyah",
//           "statusGroup": "Tasarım Iş Listesi"
//         },
//         {
//           "statusId": 7,
//           "statusName": "Müşteriden Bilgi Bekleniyor",
//           "statusdisplayColor": "Açık Mor",
//           "statusGroup": "Tasarım Iş Listesi"
//         },
//         {
//           "statusId": 8,
//           "statusName": "Müşteri Onayı Bekleniyor",
//           "statusdisplayColor": "Koyu Pembe",
//           "statusGroup": "Tasarım Iş Listesi"
//         },
//         {
//           "statusId": 9,
//           "statusName": "Testi Yapılan(Hazır) Projeler",
//           "statusdisplayColor": "Koyu Gri",
//           "statusGroup": "Robot Süreçleri"
//         },
//         {
//           "statusId": 10,
//           "statusName": "Testte Olan Projeler",
//           "statusdisplayColor": "Koyu Mavi",
//           "statusGroup": "Robot Süreçleri"
//         },
//         {
//           "statusId": 11,
//           "statusName": "Yükleme Yapılan Projeler",
//           "statusdisplayColor": "Kırmızı",
//           "statusGroup": "Robot Süreçleri"
//         },
//         {
//           "statusId": 12,
//           "statusName": "Tasarımda Olan Projeler",
//           "statusdisplayColor": "Koyu Mor",
//           "statusGroup": "Robot Süreçleri"
//         },
//         {
//           "statusId": 13,
//           "statusName": "İmalatta Olan Projeler",
//           "statusdisplayColor": "Koyu Gri",
//           "statusGroup": "Robot Süreçleri"
//         },
//         {
//           "statusId": 14,
//           "statusName": "Kamerada Olan Projeler",
//           "statusdisplayColor": "Koyu Sarı",
//           "statusGroup": "Robot Süreçleri"
//         },
//         {
//           "statusId": 15,
//           "statusName": "Operasyon Başladı",
//           "statusdisplayColor": "Çok Açık Yeşil",
//           "statusGroup": "Operasyon Süreçleri"
//         },
//         {
//           "statusId": 16,
//           "statusName": "Operasyon Tamamlandı",
//           "statusdisplayColor": "Koyu Yeşil",
//           "statusGroup": "Operasyon Süreçleri"
//         },
//         {
//           "statusId": 17,
//           "statusName": "Operasyon Durdu",
//           "statusdisplayColor": "Sarı",
//           "statusGroup": "Operasyon Süreçleri"
//         },
//         {
//           "statusId": 18,
//           "statusName": "Operasyon Iptal",
//           "statusdisplayColor": "Kırmızı",
//           "statusGroup": "Operasyon Süreçleri"
//         },
//         {
//           "statusId": 19,
//           "statusName": "Operasyon Bekliyor",
//           "statusdisplayColor": "Beyaz",
//           "statusGroup": "Operasyon Süreçleri"
//         },
//         {
//           "statusId": 20,
//           "statusName": "Henüz Belirlenmedi",
//           "statusdisplayColor": "Beyaz",
//           "statusGroup": "Erp"
//         }
//       ],
//       "taskOperationList": [
//         {
//           "id": 1,
//           "name": "Sipariş Süreci",
//           "displayColor": "Çok Açık Mavi",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 1,
//           "routeLevelName": "Proje Süreçleri",
//           "preRouteId": 0
//         },
//         {
//           "id": 2,
//           "name": "Siparişin Alınması",
//           "displayColor": "Çok Açık Mavi",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Sipariş Süreci",
//           "preRouteId": 1
//         },
//         {
//           "id": 3,
//           "name": "Sipariş Bilgi Toplama",
//           "displayColor": "Çok Açık Mavi",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Sipariş Süreci",
//           "preRouteId": 1
//         },
//         {
//           "id": 4,
//           "name": "Tasarım Süreci",
//           "displayColor": "Bej",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 1,
//           "routeLevelName": "Proje Süreçleri",
//           "preRouteId": 0
//         },
//         {
//           "id": 5,
//           "name": "Tasarım Işlemleri",
//           "displayColor": "Bej",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Tasarım Süreci",
//           "preRouteId": 4
//         },
//         {
//           "id": 6,
//           "name": "Imalat Resminin Hazırlanması",
//           "displayColor": "Bej",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 1,
//           "routeLevelName": "Tasarım Süreci",
//           "preRouteId": 0
//         },
//         {
//           "id": 7,
//           "name": "Şase Üretim Süreci",
//           "displayColor": "Açık Mavi",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 1,
//           "routeLevelName": "Proje Süreçleri",
//           "preRouteId": 0
//         },
//         {
//           "id": 8,
//           "name": "Şase; Dış Imalat",
//           "displayColor": "Açık Mavi",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Şase Üretim Süreci",
//           "preRouteId": 7
//         },
//         {
//           "id": 9,
//           "name": "Şase; Lazer Kesim",
//           "displayColor": "Açık Mavi",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Şase Üretim Süreci",
//           "preRouteId": 7
//         },
//         {
//           "id": 10,
//           "name": "Şase; Kaynak",
//           "displayColor": "Açık Mavi",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Şase Üretim Süreci",
//           "preRouteId": 7
//         },
//         {
//           "id": 11,
//           "name": "Şase; Teslim",
//           "displayColor": "Açık Mavi",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Şase Üretim Süreci",
//           "preRouteId": 7
//         },
//         {
//           "id": 12,
//           "name": "Dizme Üretim Süreci",
//           "displayColor": "Açık Turuncu",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 1,
//           "routeLevelName": "Proje Süreçleri",
//           "preRouteId": 0
//         },
//         {
//           "id": 13,
//           "name": "Dizme; Iç Imalat",
//           "displayColor": "Açık Turuncu",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Dizme Üretim Süreci",
//           "preRouteId": 12
//         },
//         {
//           "id": 14,
//           "name": "Dizme; Dış Imalat",
//           "displayColor": "Açık Turuncu",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Dizme Üretim Süreci",
//           "preRouteId": 12
//         },
//         {
//           "id": 15,
//           "name": "Dizme; Satın Alma / Depo",
//           "displayColor": "Açık Turuncu",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Dizme Üretim Süreci",
//           "preRouteId": 12
//         },
//         {
//           "id": 16,
//           "name": "Dizme; Montaj",
//           "displayColor": "Açık Turuncu",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Dizme Üretim Süreci",
//           "preRouteId": 12
//         },
//         {
//           "id": 17,
//           "name": "Dizme; Tesisat",
//           "displayColor": "Açık Turuncu",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Dizme Üretim Süreci",
//           "preRouteId": 12
//         },
//         {
//           "id": 18,
//           "name": "Ana Aks Kol Üretim Süreci",
//           "displayColor": "Açık Mor",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 1,
//           "routeLevelName": "Proje Süreçleri",
//           "preRouteId": 0
//         },
//         {
//           "id": 19,
//           "name": "Ana Aks Kol; Iç Imalat",
//           "displayColor": "Açık Mor",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Ana Aks Kol Üretim Süreci",
//           "preRouteId": 18
//         },
//         {
//           "id": 20,
//           "name": "Ana Aks Kol; Dış Imalat ",
//           "displayColor": "Açık Mor",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Ana Aks Kol Üretim Süreci",
//           "preRouteId": 18
//         },
//         {
//           "id": 21,
//           "name": "Ana Aks Kol; Satın Alma / Depo ",
//           "displayColor": "Açık Mor",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Ana Aks Kol Üretim Süreci",
//           "preRouteId": 18
//         },
//         {
//           "id": 22,
//           "name": "Ana Aks Kol; Montaj ",
//           "displayColor": "Açık Mor",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Ana Aks Kol Üretim Süreci",
//           "preRouteId": 18
//         },
//         {
//           "id": 23,
//           "name": "Ana Aks Kol; Tesisat ",
//           "displayColor": "Açık Mor",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Ana Aks Kol Üretim Süreci",
//           "preRouteId": 18
//         },
//         {
//           "id": 24,
//           "name": "Seperatör Üretim Süreci",
//           "displayColor": "Açık Yeşil",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 1,
//           "routeLevelName": "Proje Süreçleri",
//           "preRouteId": 0
//         },
//         {
//           "id": 25,
//           "name": "Seperatör; Iç Imalat",
//           "displayColor": "Açık Yeşil",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Seperatör Üretim Süreci",
//           "preRouteId": 24
//         },
//         {
//           "id": 26,
//           "name": "Seperatör; Dış Imalat",
//           "displayColor": "Açık Yeşil",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Seperatör Üretim Süreci",
//           "preRouteId": 24
//         },
//         {
//           "id": 27,
//           "name": "Seperatör; Satın Alma / Depo",
//           "displayColor": "Açık Yeşil",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Seperatör Üretim Süreci",
//           "preRouteId": 24
//         },
//         {
//           "id": 28,
//           "name": "Seperatör; Montaj",
//           "displayColor": "Açık Yeşil",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Seperatör Üretim Süreci",
//           "preRouteId": 24
//         },
//         {
//           "id": 29,
//           "name": "Seperatör; Tesisat",
//           "displayColor": "Açık Yeşil",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Seperatör Üretim Süreci",
//           "preRouteId": 24
//         },
//         {
//           "id": 30,
//           "name": "Test",
//           "displayColor": "Gri",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 1,
//           "routeLevelName": "Proje Süreçleri",
//           "preRouteId": 0
//         },
//         {
//           "id": 31,
//           "name": "Test; Mekanik Ayar",
//           "displayColor": "Gri",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Test",
//           "preRouteId": 30
//         },
//         {
//           "id": 32,
//           "name": "Test; Elektrik Testi",
//           "displayColor": "Gri",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Test",
//           "preRouteId": 30
//         },
//         {
//           "id": 33,
//           "name": "Test; Yazılım Testi",
//           "displayColor": "Gri",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Test",
//           "preRouteId": 30
//         },
//         {
//           "id": 34,
//           "name": "Test; Proje Kontrol",
//           "displayColor": "Gri",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Test",
//           "preRouteId": 30
//         },
//         {
//           "id": 35,
//           "name": "Yükleme Formunun Hazırlanması",
//           "displayColor": "Açık Kahverengi",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 1,
//           "routeLevelName": "Proje Süreçleri",
//           "preRouteId": 0
//         },
//         {
//           "id": 36,
//           "name": "Yüklemenin Gerçekleştirilmesi",
//           "displayColor": "Koyu Kahverengi",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 1,
//           "routeLevelName": "Proje Süreçleri",
//           "preRouteId": 0
//         },
//         {
//           "id": 37,
//           "name": "Etiket Transfer Üretim Süreci",
//           "displayColor": "Açık Yeşil",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 1,
//           "routeLevelName": "Proje Süreçleri",
//           "preRouteId": 0
//         },
//         {
//           "id": 38,
//           "name": "Etiket Transfer; Iç Imalat",
//           "displayColor": "Açık Yeşil",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Etiket Transfer Üretim Süreci",
//           "preRouteId": 37
//         },
//         {
//           "id": 39,
//           "name": "Etiket Transfer; Dış Imalat",
//           "displayColOrderor": "Açık Yeşil",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Etiket Transfer Üretim Süreci",
//           "preRouteId": 37
//         },
//         {
//           "id": 40,
//           "name": "Etiket Transfer; Satın Alma / Depo",
//           "displayColor": "Açık Yeşil",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Etiket Transfer Üretim Süreci",
//           "preRouteId": 37
//         },
//         {
//           "id": 41,
//           "name": "Etiket Transfer; Montaj",
//           "displayColor": "Açık Yeşil",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Etiket Transfer Üretim Süreci",
//           "preRouteId": 37
//         },
//         {
//           "id": 42,
//           "name": "Etiket Transfer; Tesisat",
//           "displayColor": "Açık Yeşil",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 2,
//           "routeLevelName": "Etiket Transfer Üretim Süreci",
//           "preRouteId": 37
//         },
//         {
//           "id": 43,
//           "name": "Yeni Proje/Görev/Operasyon",
//           "displayColor": "Beyaz",
//           "variousInfoRelations": [
//             {}
//           ],
//           "routeLevelNumber": 1,
//           "routeLevelName": "ERP",
//           "preRouteId": 0
//         }
//       ]
//     }
//   ]
// }
