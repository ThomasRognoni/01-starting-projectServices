import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
// import { TasksService } from './app/tasks/tasks.service';

// bootstrapApplication(AppComponent, {
//   providers: [TasksService],
// }).catch((err) => console.error(err));   alternative whit which we can provide the service
bootstrapApplication(AppComponent,).catch((err) => console.error(err));
