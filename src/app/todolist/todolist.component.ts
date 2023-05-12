import { Component } from '@angular/core';

interface Task {
  name: string;
  category: string;
  dueDate: Date;
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class  TodolistComponent {
  tasks: Task[] = [];
  categories = ['Cardio', 'Haltérophilie', 'Étirements'];
  
  ngOnInit() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }
  
  onSubmit(name: string, category: string, dueDate: string) {
    const task: Task = {
      name,
      category,
      dueDate: new Date(dueDate)
    };
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  
  removeTask(index: number) {
    this.tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
