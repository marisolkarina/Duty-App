import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { AuthComponent } from './components/auth/auth.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'add', component: AddComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
