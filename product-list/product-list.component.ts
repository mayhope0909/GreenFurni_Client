import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] =[];
  selectedProductType: string | null = null;
  selectedPriceRange: string | null = null;
  
  constructor(private productService: ProductService){ }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

 
  
  clearFilters() {
    this.selectedProductType = null;
    this.selectedPriceRange = null;
  }

  filteredProducts() { 
    return this.products.filter(product => 
      { 
        const matchesType = this.selectedProductType ? product.sort === this.selectedProductType : true; 
        const matchesPrice = this.selectedPriceRange ? this.priceMatch(product.price) : true; 
        return matchesType && matchesPrice; 
      }); 
  }
  priceMatch(price: number): boolean { 
    if (this.selectedPriceRange === 'under100') {
        return price < 100; 
    } else if (this.selectedPriceRange === '100to200') { 
        return price >= 100 && price <= 200; 
    } else if (this.selectedPriceRange === '200to300') {
        return price >= 200 && price <= 300; 
    } else if (this.selectedPriceRange === 'above300') {
        return price > 300; 
    } 
        return true; 
  }
  
}
