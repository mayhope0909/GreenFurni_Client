import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{

  mobileMenu: HTMLElement | null = null;
  navMenu: HTMLElement | null = null;

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const h4Elements = document.querySelectorAll('footer h4');

      h4Elements.forEach((h4Element) => {
        h4Element.addEventListener('click', () => {
          h4Element.classList.toggle('active');
        });
      });
    });
    
    this.mobileMenu = document.getElementById("mobile-menu");
    this.navMenu = document.getElementById("nav");

    if (this.mobileMenu && this.navMenu) {
      this.mobileMenu.addEventListener("click", () => {
        if (this.mobileMenu?.classList && this.navMenu?.classList) {
          this.mobileMenu.classList.toggle("active");
          this.navMenu.classList.toggle("active");
        }
      });
    }
  }

}
