import { Component, OnInit } from "@angular/core";
import {
  EditSettingsModel,
  DataStateChangeEventArgs
} from "@syncfusion/ej2-angular-treegrid";
import { Observable } from "rxjs";
import { TaskStoreService } from "./task-store.service";
import { DataSourceChangedEventArgs } from "@syncfusion/ej2-grids";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public editSettings: EditSettingsModel;
  public toolbar: String[];

  public tasks: Observable<DataStateChangeEventArgs>;

  constructor(private TaskService: TaskStoreService) {
    this.tasks = TaskService;
  }

  public dataStateChange(state: DataStateChangeEventArgs): void {
    this.TaskService.execute(state);
  }

  public dataSourceChanged(
    dataSourceChangedEvent: DataSourceChangedEventArgs
  ): void {
    if (dataSourceChangedEvent.action === "add") {
      this.TaskService.addRecord(dataSourceChangedEvent).subscribe(() => {
        dataSourceChangedEvent.endEdit();
      });
    }
    if (dataSourceChangedEvent.action === "edit") {
      this.TaskService.updateRecord(dataSourceChangedEvent).subscribe(() => {
        dataSourceChangedEvent.endEdit();
      });
    }
    if (dataSourceChangedEvent.requestType === "delete") {
      this.TaskService.deleteRecord(dataSourceChangedEvent).subscribe(() => {
        dataSourceChangedEvent.endEdit();
      });
    }
  }

  ngOnInit(): void {
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: "Dialog"
    };
    this.toolbar = ["Add", "Edit", "Delete", "Update", "Cancel"];

    const state: any = { skip: 0, take: 10 };
    this.TaskService.execute(state);
  }
}
