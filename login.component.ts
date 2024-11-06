import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {  
  email: string = '';
  password: string = '';
  successMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email && this.password) {
      this.successMessage = 'Đăng nhập thành công!';
      
      setTimeout(() => {
        this.successMessage = '';
        this.router.navigate(['../homepage']);
      }, 1000);
    } else {
      this.successMessage = 'Vui lòng nhập đầy đủ thông tin!';
    }
  }
}
