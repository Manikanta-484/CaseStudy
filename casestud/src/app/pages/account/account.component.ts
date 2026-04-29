import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  user = {
  name: '',
  email: '',
  mobile: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: ''
};

  save() {
    alert('Saved!');
  }
}