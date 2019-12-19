import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import {
  TreeGridModule,
  EditService,
  ToolbarService
} from "@syncfusion/ej2-angular-treegrid";

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { TaskDataService } from "./task-data.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TreeGridModule,
    InMemoryWebApiModule.forRoot(TaskDataService),
    HttpClientModule
  ],
  providers: [EditService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
