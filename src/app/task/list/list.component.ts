import { Component, OnInit } from '@angular/core';
import { ListTask } from 'src/app/Models/listTask';
import { ServiceService } from 'src/app/Servicer/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listTasks:ListTask[];

  constructor(private service:ServiceService,
    private router:Router) { }

  ngOnInit() {
    this.loadListTask();
  }

  loadListTask(){
    this.service.getTasks()
    .subscribe(data=>{
      this.listTasks=data.data;
      console.log(this.listTasks)
    },error=>{
      alert(error.message)
    })

  }

  delete(idTask){
    this.service.deleteTask(idTask).
    subscribe(data=>{
      if(data.message=="success"){
        alert("Se elimino con exito la Tarea");
        this.loadListTask();
      }
    },error=>{
      alert(error.message)
    }
    )
  }

  register(){
    this.router.navigate(["addTask"]);
  }

}
