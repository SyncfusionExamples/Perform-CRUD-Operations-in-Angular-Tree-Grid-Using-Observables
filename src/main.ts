import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { importProvidersFrom } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TaskDataService } from './app/task-data.service';
import { EditService, ToolbarService } from '@syncfusion/ej2-angular-treegrid';
import { HttpClientModule } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(InMemoryWebApiModule.forRoot(TaskDataService)),
    EditService,
    ToolbarService
  ]
}).catch(err => console.error(err));
