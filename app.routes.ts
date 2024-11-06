import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { PasswordauthenticationComponent } from './passwordauthentication/passwordauthentication.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'passwordauthentication', component: PasswordauthenticationComponent },
  { path: 'newpassword', component: NewpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

