import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { Ramverk1Component } from './ramverk1/ramverk1.component';
import { Ramverk2Component } from './ramverk2/ramverk2.component';
import { AzureComponent } from './azure/azure.component';

export const routes: Routes = [
   { path:'start', component:StartComponent},
   { path:'ramverk1', component:Ramverk1Component},
   { path:'ramverk2', component:Ramverk2Component},
   { path:'azure', component:AzureComponent},
   {path:'', redirectTo:'/start', pathMatch:'full'}
];
