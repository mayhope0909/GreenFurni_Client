
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UsersService } from '../Service/users.service';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  formData = {
    name: '',
    phone: '',
    email: '',
    gender: '',
    birthDate: '',
    avatar: ''
  };

  isEditing = false;

  constructor(private usersService: UsersService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.usersService.getProfile().subscribe(
      (data) => {
        this.formData = data;
      },
      (error) => {
        console.error('Error fetching profile data:', error);
      }
    );
  }

  onEdit(): void {
    this.isEditing = true;
  }

  onSave(): void {
    this.usersService.updateProfile(this.formData).subscribe(
      (response) => {
        console.log('Profile updated successfully:', response);

        // Update formData with the response data
        this.formData = response;

        // Toggle back to non-editable state
        this.isEditing = false;

        // Manually trigger change detection to update the view
        this.cdRef.detectChanges();
      },
      (error) => {
        console.error('Error updating profile:', error);
      }
    );
  }

  onAvatarSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.formData.avatar = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
