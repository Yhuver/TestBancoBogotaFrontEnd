import { Component, OnInit } from '@angular/core';
import { CreateTask } from 'src/app/Models/createTask';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Servicer/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  constructor(private router:Router, private service:ServiceService) { }

  task:CreateTask=new CreateTask();

  ngOnInit() {
    console.log(this.task)
  }

  save(){
    console.log(this.task)
    if(this.task.name==null||this.task.name==''){
      return alert("Debe agregar un nombre")
    }
    if(this.task.areaM2==null||this.task.areaM2==''){
      return alert("Debe agregar el area en M2")
    }
     this.service.createTasks(this.task)
    .subscribe(data=>{
      if(data.message=="success"){
        alert("Se registro con exito la ubicacion");
        this.router.navigate(["listTask"]);
      }
    },error=>{
      alert(error.error.message)
    })
  }

}
