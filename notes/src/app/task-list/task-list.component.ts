import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TASKS } from '../mock-tasks';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks:Task[] = TASKS;

}
