export interface GanttData {}


// bunları class değil interface yapmak daha iyi olur mu?
export class Task {
  id!: number;

  parentId!: number;

  title!: string;

  start!: Date;

  end!: Date;

  // duration?: number;

  BaselineStartDate!: Date;

  BaselineEndDate!: Date;

  customProgress!: string;

  company!: string;

  isRevision!: boolean;

  customer!: string;

  status!: string;

  notes!: string;
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
