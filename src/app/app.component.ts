import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';
import {ToDoComponent} from './to-do/to-do.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  profile: Array<any>;
  
 
 constructor(private http: Http,private router: Router) {    
	 this.http.get('https://jsonplaceholder.typicode.com/users')
	        
	        .map((res: Response) => res.json())
	        .subscribe(data => {
	           console.log(data);
	           this.profile = data;
	           
	        }, error => {
	           
	        });
	}

	viewTodoList(id) {
	        this.router.navigateByUrl('ToDos');		   
			console.log(id);
			localStorage.setItem('userId',id);
			
	}
}

