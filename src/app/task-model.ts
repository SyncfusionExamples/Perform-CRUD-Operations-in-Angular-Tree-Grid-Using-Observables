export class TaskModel {
  id?: Number;
  TaskName: String;
  StartDate: Date;
  EndDate: Date;
  Duration: Number;
  Progress: Number;
  isParent: Boolean;
  ParentID: Number;
}
