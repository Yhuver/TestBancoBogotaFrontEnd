import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateTask } from '../Models/createTask';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/api/v1/'



  getTasks(){
    return this.http.get<any>(this.Url+'location');
  }

  createTasks(task:CreateTask){
    return this.http.post<any>(this.Url+'location',task);
  }


  deleteTask(idTask:number){
    return this.http.delete<any>(this.Url+'location', {
      headers: new HttpHeaders({ 'idLocation': ''+idTask })
  });
}

}
