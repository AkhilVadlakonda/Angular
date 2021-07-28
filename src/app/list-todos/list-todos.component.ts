import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id: number,
    public name: string,
    public DOB: Date
  )
  {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  
  todos=[
    new Todo(1,'Rohit', new Date),
    new Todo(2, 'Gill', new Date),
    new Todo(3, 'Pujara', new Date)
    // {id:1,name:'Rohit'},
    // {id:2,name:'Gill'},
    // {id:3,name:'Pujara'},
    // {id:4,name:'Kohli'}
  ]
  todo={
    id:1,
    name:'John'
  }

  constructor() { }

  ngOnInit() {
  }

}
