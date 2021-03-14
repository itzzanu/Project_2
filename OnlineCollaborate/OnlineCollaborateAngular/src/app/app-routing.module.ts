import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ActiveUserComponent } from './active-user/active-user.component';
const routes: Routes = [
  { path: '', redirectTo: 'active-user', pathMatch: 'full' },  
  { path: 'user-list', component: UserListComponent },  
  { path: 'add-user', component: RegisterUserComponent }, 
  { path: 'login-user', component: LoginUserComponent},
  { path: 'active-user', component: ActiveUserComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
