export interface GanttData {}


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

  imalatResmiHazirlayan!: string;


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
