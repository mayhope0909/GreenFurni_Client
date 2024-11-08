import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-passwordauthentication',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './passwordauthentication.component.html',
  styleUrls: ['./passwordauthentication.component.css']
})
export class PasswordauthenticationComponent {
  verificationCode: string[] = ['', '', '', ''];
  isCodeValid: boolean = true;

  // Hàm xử lý khi người dùng nhập mã
  onCodeInput(index: number, event: any): void {
    const value = event.target.value;
    
    this.verificationCode[index] = value;

    if (value.length === 1 && index < this.verificationCode.length - 1) {
      const nextInput = (event.target as HTMLElement).nextElementSibling as HTMLInputElement;
      nextInput.focus();
    }

    if (value.length === 0 && index > 0) {
      const previousInput = (event.target as HTMLElement).previousElementSibling as HTMLInputElement;
      previousInput.focus();
    }
  }

  // Hàm xử lý sự kiện nhấn nút "Tiếp Theo"
  onSubmit(): void {
    const fullCode = this.verificationCode.join('');
    this.isCodeValid = this.validateCode(fullCode);

    if (this.isCodeValid) {
      console.log('Mã xác thực hợp lệ:', fullCode);
    } else {
      console.error('Mã xác thực không hợp lệ.');
    }
  }

  // Hàm kiểm tra mã xác thực
  validateCode(code: string): boolean {
    return code === '1234'; // Mã xác thực cố định cho ví dụ đơn giản
  }

  // Hàm gửi mã xác thực lại
  resendCode(): void {
    console.log('Gửi mã xác thực lại...');
  }
}
