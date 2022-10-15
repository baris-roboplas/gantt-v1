export interface GanttData {
}

export class Task {
  id!: number;

  parentId!: number;

  title!: string;

  start!: Date;

  end!: Date;

  duration?: number ;

  BaselineStartDate?: Date;

  BaselineEndDate?: Date;

  taskStatusColor?: string | null;

  progress!: number;
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
