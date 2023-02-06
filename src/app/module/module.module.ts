import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { AddComponent } from './components/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddResultComponent } from './components/add-result/add-result.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  declarations: [
    AuthComponent,
    AddComponent,
    AddResultComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ModuleModule { }
