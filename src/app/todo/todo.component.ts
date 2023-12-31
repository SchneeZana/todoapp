import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number = 0;
  todo: Todo = new Todo(this.id, '', false, new Date());

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.todoService.retrieveTodo('in28minutes', this.id)
        .subscribe(
          data => this.todo = data as Todo
        )
    }
  }

  /*saveTodo() {
    if(this.id === -1){

      this.todoService.createTodo('in28minutes', this.todo)
      .subscribe(
        data=> {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    } else {
    this.todoService.updateTodo('in28minutes', this.id, this.todo)
    .subscribe(
      data=> {
        console.log(data)
        this.router.navigate(['todos']);

      },
      error => {
        console.error('error updating todo', error);
      }
    )
  }}
}*/
saveTodo() {
  if(this.id === -1){
    // Create Todo
    this.todoService.createTodo('in28minutes', this.todo)
    .subscribe(
      data => {
        console.log('Todo created:', data);
        this.router.navigate(['todos']);
      },
      error => {
        console.error('Error creating todo:', error);
      }
    );
  } else {
    // Update Todo
    this.todoService.updateTodo('in28minutes', this.id, this.todo)
    .subscribe(
      data => {
        console.log('Todo updated:', data);
        this.router.navigate(['todos']);
      },
      error => {
        console.error('Error updating todo:', error);
      }
    );
  }
}

}
