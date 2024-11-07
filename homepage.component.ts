import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  faqQuestions = [
    { question: 'Làm thế nào để gửi sản phẩm cần bảo hành cho GreenFurni?', answer: 'Liên hệ với bộ phận hỗ trợ để được hướng dẫn chi tiết.', showAnswer: false },
    { question: 'Sản phẩm sau mua có được đổi trả không?', answer: 'Sản phẩm có thể đổi trả trong vòng 7 ngày.', showAnswer: false },
    { question: 'Sản phẩm được bảo hành như thế nào?', answer: 'Chúng tôi cung cấp bảo hành 12 tháng cho tất cả sản phẩm.', showAnswer: false }
  ];
}
