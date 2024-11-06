import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
   
    products: any[] =[];

    constructor(private productService: ProductService){ }

    ngOnInit(): void {
      this.productService.getProducts().subscribe((data) => {
        this.products = data;
      });
    }
}
