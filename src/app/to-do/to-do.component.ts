import { Component, OnInit, Input } from '@angular/core';
import { Http , Response } from '@angular/http';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

	 @Input() toDoList: Array<any> ;
	 ToDo :Array<any>;
	 addToDo: AddToDo = {title:''};
  constructor(private http: Http) { }
  
 
  ngOnInit() {
  	   var userId = localStorage.getItem('userId');	
  	   
       this.http.get('https://jsonplaceholder.typicode.com/todos?userId='+userId)
	        
	        .map((res: Response) => res.json())
	        .subscribe(data => {
	           console.log(data);
	           this.ToDo = data;
	           
	        }, error => {
	           
	        });
  }


  handleCompleteStatus(e,toDoData){
  	var isCheckedValue = e.target.checked;
  	toDoData['completed'] = isCheckedValue;
  	console.log(toDoData);  	
    this.http.put('https://jsonplaceholder.typicode.com/todos/1',toDoData)
	        
	        .map((res: Response) => res.json())
	        .subscribe(data => {
	           console.log(data);          
	           
	        }, error => {
	           
	        });
  }

  addNewToDoTask(){  		
  		console.log(this.addToDo);
  		this.ToDo.push(this.addToDo);
  }

  removeToDo(index){
  		console.log(index);
  		this.ToDo.splice(index,1);
  		console.log(this.ToDo);
  }

}

interface AddToDo {    
    title: string;   
}
