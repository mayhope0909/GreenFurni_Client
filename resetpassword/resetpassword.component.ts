import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], 
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {
  userContact: string = '';
  successMessage: string = '';

  constructor() {}

  onSubmit() {
    if (this.userContact) {
      this.successMessage = 'Yêu cầu đặt lại mật khẩu đã được gửi!';
      console.log('Gửi yêu cầu đặt lại mật khẩu cho:', this.userContact);

      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    } else {
      console.log('Vui lòng nhập Email hoặc Số điện thoại');
    }
  }
}
