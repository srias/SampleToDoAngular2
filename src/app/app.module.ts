import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { RouterModule,Routes }   from '@angular/router';


import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';



const routes: Routes = [
    
   { path: 'ToDos', component: ToDoComponent }
   

];

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }


 