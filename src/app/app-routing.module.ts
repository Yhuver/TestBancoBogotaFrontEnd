import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent as ListComponentTask } from './task/list/list.component';
import { AddComponent as AddComponentTask } from './task/add/add.component';

const routes: Routes = [
  {path: 'listTask', component:ListComponentTask},
  {path: 'addTask', component:AddComponentTask},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
