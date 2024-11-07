

// import { Component } from "@angular/core";
// import { CommonModule } from "@angular/common";
// import { FormsModule } from "@angular/forms";

// @Component({
//   selector: 'app-requested-product',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './requested-product.component.html',
//   styleUrls: ['./requested-product.component.css']
// })
// export class RequestedProductComponent {
//   formData = {
//     name: '',
//     email: '',
//     phone: '',
//     productName: '',
//     description: ''
//   };

//   selectedFile: File | null = null;

//   onFileSelected(event: Event) {
//     const input = event.target as HTMLInputElement;
//     if (input.files && input.files.length > 0) {
//       this.selectedFile = input.files[0];
//       console.log('File selected:', this.selectedFile);
//     }
//   }

//   onSubmit() {
//     console.log('Form submitted:', this.formData);
//     if (this.selectedFile) {
//       console.log('Selected file:', this.selectedFile.name);
//     }
//     // Thực hiện các hành động khác với file nếu cần (ví dụ: tải lên máy chủ)
//   }
// }


import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CustomproductService } from '../Service/customproduct.service';

@Component({
  selector: 'app-requested-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './requested-product.component.html',
  styleUrls: ['./requested-product.component.css']
})
export class RequestedProductComponent implements OnInit { // Implement OnInit
  formData = {
    name: '',
    email: '',
    phone: '',
    productName: '',
    description: ''
  };

  selectedFile: File | null = null;

  constructor(private customProductService: CustomproductService) {}

  ngOnInit(): void {
    // Perform any initialization logic here, if needed.
    console.log('RequestedProductComponent initialized.');
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    if (this.selectedFile) {
      this.customProductService.submitForm(this.formData, this.selectedFile)
        .subscribe(
          (response: any) => {
            console.log('Response from server:', response);
            // Handle successful response, e.g., display a success message
          },
          (error: any) => {
            console.error('Error:', error);
            // Handle error, e.g., display an error message
          }
        );
    } else {
      console.warn('No file selected.');
    }
  }
}
