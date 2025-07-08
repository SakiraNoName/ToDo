import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { TableComponent } from './infastructure/ui/Table/table/table.component';
import { AppRoutingModule } from "./app-routing.module";
import { TasksComponent } from './pages/tasks/tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskByIdComponent } from './pages/task-by-id/task-by-id.component';
import { RouterModule } from '@angular/router';
import { TasksCreateComponent } from './pages/tasks-create/tasks-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TasksComponent,
    TaskByIdComponent,
    TasksCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule, 
    CommonModule,
    AppRoutingModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
