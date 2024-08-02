import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavComponent,
    TaskListComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
