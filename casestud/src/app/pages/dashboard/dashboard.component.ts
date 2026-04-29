// 

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  categories = [
    'Featured Item',
    'Best Seller',
    'Summer Discount',
    'Premium Product',
    'Gift Idea'
  ];

  activeCategory = 'Featured Item';

  // sample images (use your own images here)
  images = [
    'assets/img/p1.png',
    'assets/img/p2.png',
    'assets/img/p3.png',
    'assets/img/p4.png',
    'assets/img/p5.png'
  ];

  products = [
  { image: 'assets/img/p1.png', name: 'Samsung Galaxy S5', price: 699 },
  { image: 'assets/img/p2.png', name: 'Xbox One', price: 399 },
  { image: 'assets/img/p3.png', name: 'Playstation 4', price: 699 },
  { image: 'assets/img/p4.png', name: 'OnePlus 5', price: 699 },
  { image: 'assets/img/p5.png', name: 'Vizio Smart TV', price: 599 },
  { image: 'assets/img/p6.png', name: 'Microsoft Surface', price: 399 }
];

  selectedImage = this.images[0];

  selectCategory(category: string) {
    this.activeCategory = category;

    // random image change
    const randomIndex = Math.floor(Math.random() * this.images.length);
    this.selectedImage = this.images[randomIndex];
  }
}