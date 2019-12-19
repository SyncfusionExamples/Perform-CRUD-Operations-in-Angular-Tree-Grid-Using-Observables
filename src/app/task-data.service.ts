import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { TaskModel } from "./task-model";

@Injectable({
  providedIn: "root"
})
export class TaskDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const tasks: TaskModel[] = [
      {
        id: 1,
        TaskName: "Parent Task 1",
        StartDate: new Date("02/23/2017"),
        EndDate: new Date("02/27/2017"),
        Duration: 35,
        Progress: 50,
        isParent: true,
        ParentID: null
      },
      {
        id: 2,
        TaskName: "Child Task 1",
        StartDate: new Date("02/23/2017"),
        EndDate: new Date("02/27/2017"),
        Duration: 65,
        Progress: 70,
        ParentID: 1,
        isParent: false
      },
      {
        id: 3,
        TaskName: "Child Task 2",
        StartDate: new Date("02/23/2017"),
        EndDate: new Date("02/27/2017"),
        Duration: 15,
        Progress: 40,
        ParentID: 1,
        isParent: false
      },
      {
        id: 4,
        TaskName: "Child Task 3",
        StartDate: new Date("02/23/2017"),
        EndDate: new Date("02/27/2017"),
        Duration: 25,
        Progress: 60,
        ParentID: 1,
        isParent: false
      },
      {
        id: 5,
        TaskName: "Parent Task 2",
        StartDate: new Date("03/14/2017"),
        EndDate: new Date("03/18/2017"),
        Duration: 85,
        Progress: 10,
        isParent: true,
        ParentID: null
      },
      {
        id: 6,
        TaskName: "Child Task 4",
        StartDate: new Date("03/02/2017"),
        EndDate: new Date("03/06/2017"),
        Duration: 45,
        Progress: 90,
        ParentID: 5,
        isParent: false
      },
      {
        id: 7,
        TaskName: "Child Task 5",
        StartDate: new Date("08/02/2017"),
        EndDate: new Date("03/06/2017"),
        Duration: 75,
        Progress: 80,
        ParentID: 5,
        isParent: false
      },
      {
        id: 8,
        TaskName: "Child Task 6",
        StartDate: new Date("05/02/2017"),
        EndDate: new Date("03/06/2017"),
        Duration: 85,
        Progress: 60,
        ParentID: 5,
        isParent: false
      },
      {
        id: 9,
        TaskName: "Child Task 7",
        StartDate: new Date("04/02/2017"),
        EndDate: new Date("03/06/2017"),
        Duration: 95,
        Progress: 30,
        ParentID: 5,
        isParent: false
      },
      {
        id: 10,
        TaskName: "Child Task 8",
        StartDate: new Date("08/02/2017"),
        EndDate: new Date("10/06/2017"),
        Duration: 67,
        Progress: 50,
        ParentID: 5,
        isParent: false
      }
    ];
    return { tasks };
  }
}
