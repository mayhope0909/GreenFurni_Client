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
export class LoginComponent {  }
  }
}
