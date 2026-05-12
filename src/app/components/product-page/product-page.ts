import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Footer } from '../footer/footer';

type ProductCard = {
  category: string;
  image: string;
  name: string;
  oldPrice: string;
  price: string;
  qty: string;
  rating: string;
};

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, Footer],
  templateUrl: './product-page.html',
  styleUrl: './product-page.scss',
})
export class ProductPage implements OnInit, OnDestroy {
  selectedSize = signal('S');
  selectedImage = signal('New folder (5)/1.jpg');
  quantity = signal(1);
  countdown = signal(['14', '23', '57', '50']);

  activeTab = signal('description'); 
  isReviewModalOpen = signal(false);

  private countdownTarget = Date.now() + 14 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 57 * 60 * 1000 + 50 * 1000;
  private countdownInterval?: ReturnType<typeof setInterval>;

  thumbnails = [
    'New folder (5)/1.jpg',
    'products/1.png',
    'products/3.png',
    'products/4.png',
  ];

  sizes = ['S', 'M', 'L', 'XL'];

  boughtTogether = [
    { image: 'products/26.png', name: 'Women Flare Bell Bottom Jeans', price: '26.69', oldPrice: '28.56' },
    { image: 'products/15.png', name: 'Women Straight Fit Jeans', price: '26.69', oldPrice: '28.56' },
    { image: 'products/11.png', name: 'Women Polyester Activewear', price: '26.69', oldPrice: '28.56' },
  ];

  relatedProducts: ProductCard[] = [
    { category: 'Cake', image: 'New folder (5)/1.jpg', name: 'Chocolate Chip Cookies 250 g', qty: '500 G', price: '10.25', oldPrice: '12.57', rating: '5.0' },
    { category: 'Vegetable', image: 'products/22.png', name: 'Fresh Bread and Pastry Flour 200 g', qty: '250 ml', price: '08.02', oldPrice: '15.15', rating: '4.0' },
    { category: 'Vegetable', image: 'products/3.png', name: 'Peanut Butter Bite Premium Butter Cookies 600 g', qty: '350 G', price: '04.33', oldPrice: '10.36', rating: '2.4' },
    { category: 'Snacks', image: 'products/4.png', name: 'SnackAmor Combo Pack of Jowar Stick and Jowar Chips', qty: '570 G', price: '12.52', oldPrice: '13.62', rating: '5.0' },
    { category: 'Snacks', image: 'products/5.png', name: 'Yumitos Chilli Sprinkled Potato Chips 100 g', qty: '100 G', price: '10.25', oldPrice: '12.36', rating: '3.8' },
    { category: 'Vegetable', image: 'products/1.png', name: 'Fantasy Crunchy Choco Chip Cookies', qty: '550 G', price: '14.25', oldPrice: '16.57', rating: '4.0' },
  ];

  ngOnInit(): void {
    this.updateCountdown();
    this.countdownInterval = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

setActiveTab(tab: string): void {
    this.activeTab.set(tab);
  }

  openReviewModal(): void {
    this.isReviewModalOpen.set(true);
  }

  closeReviewModal(): void {
    this.isReviewModalOpen.set(false);
  }

  selectImage(image: string): void {
    this.selectedImage.set(image);
  }

  decrement(): void {
    this.quantity.set(Math.max(1, this.quantity() - 1));
  }

  increment(): void {
    this.quantity.set(this.quantity() + 1);
  }

  private updateCountdown(): void {
    const remaining = Math.max(0, this.countdownTarget - Date.now());
    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining % 86400000) / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);

    this.countdown.set([days, hours, minutes, seconds].map((value) =>
      value.toString().padStart(2, '0'),
    ));
  }
}
