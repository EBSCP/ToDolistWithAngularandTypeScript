import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  editId: number | null = null;
  todos: Array<{ id: number, work: string, date: string }> = [];

  addTodo() {
    if (this.name.trim()) {
      const newTodo = {
        id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
        work: this.name,
        date: new Date().toLocaleDateString()
      };
      this.todos.push(newTodo);
      this.name = '';
    }
  }

  edit(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      this.name = todo.work;
      this.editId = id;
    }
  }

  updateTodo() {
    if (this.name.trim() && this.editId !== null) {
      const todoIndex = this.todos.findIndex(t => t.id === this.editId);
      if (todoIndex !== -1) {
        this.todos[todoIndex].work = this.name;
        this.editId = null;
        this.name = '';
      }
    }
  }
  clear() {
    this.todos.pop();
  }
}
