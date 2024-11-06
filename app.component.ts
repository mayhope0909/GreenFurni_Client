import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { PasswordauthenticationComponent } from './passwordauthentication/passwordauthentication.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { RouterOutlet } from '@angular/router';
import { OrderManagementComponent } from "./order-management/order-management.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterComponent, LoginComponent, HomepageComponent, ResetpasswordComponent, PasswordauthenticationComponent, NewpasswordComponent, RouterModule,OrderManagementComponent, ProductListComponent, ProductDetailComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-client';
}
