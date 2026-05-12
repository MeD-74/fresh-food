import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Footer } from '../footer/footer';

type ShopViewMode = 'three' | 'four' | 'list';

type ShopProduct = {
  category: string;
  image: string;
  name: string;
  oldPrice: string;
  price: string;
  qty: string;
  rating: string;
};

@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [CommonModule, Footer],
  templateUrl: './shop-page.html',
  styleUrl: './shop-page.scss',
})
export class ShopPage {
  viewMode = signal<ShopViewMode>('four');
  minPrice = signal(0);
  maxPrice = signal(500000);
  selectedProduct = signal<ShopProduct | null>(null);

  constructor() {
    if (typeof globalThis.location !== 'undefined') {
      const params = new URLSearchParams(globalThis.location.search);
      const view = params.get('view');

      if (view === 'three' || view === 'four' || view === 'list') {
        this.viewMode.set(view);
      }
    }
  }

  categories = [
    { name: 'Vegetables & Fruit', icon: 'icons/vegetable.svg' },
    { name: 'Beverages', icon: 'icons/cup.svg' },
    { name: 'Meats & Seafood', icon: 'icons/meats.svg' },
    { name: 'Breakfast', icon: 'icons/breakfast.svg' },
    { name: 'Frozen Foods', icon: 'icons/frozen.svg' },
    { name: 'Milk & Dairies', icon: 'icons/milk.svg' },
    { name: 'Biscuits & Snacks', icon: 'icons/biscuit.svg' },
    { name: 'Grocery & Staples', icon: 'icons/leaf.svg' },
  ];

  products: ShopProduct[] = [
    {
      category: 'Vegetable',
      image: 'products/22.png',
      name: 'Fresh Bread and Pastry Flour 200 g',
      qty: '250 ml',
      price: '08.02',
      oldPrice: '15.15',
      rating: '4.0',
    },
    {
      category: 'Vegetable',
      image: 'products/3.png',
      name: 'Peanut Butter Bite Premium Butter Cookies 600 g',
      qty: '350 G',
      price: '04.33',
      oldPrice: '10.36',
      rating: '2.4',
    },
    {
      category: 'Snacks',
      image: 'products/4.png',
      name: 'SnackAmor Combo Pack of Jowar Stick and Jowar Chips',
      qty: '570 G',
      price: '12.52',
      oldPrice: '13.62',
      rating: '5.0',
    },
    {
      category: 'Snacks',
      image: 'products/5.png',
      name: 'Yumitos Chilli Sprinkled Potato Chips 100 g',
      qty: '100 G',
      price: '10.25',
      oldPrice: '12.36',
      rating: '3.8',
    },
    {
      category: 'Vegetable',
      image: 'products/1.png',
      name: 'Fantasy Crunchy Choco Chip Cookies',
      qty: '550 G',
      price: '14.25',
      oldPrice: '16.57',
      rating: '4.0',
    },
    {
      category: 'Vegetable',
      image: 'products/22.png',
      name: 'Fresh Bread and Pastry Flour 200 g',
      qty: '1 Kg',
      price: '12.68',
      oldPrice: '14.69',
      rating: '3.8',
    },
  ];

  filterTags = ['Vegetable', 'Fruit', 'Fresh', 'Milk', 'Meat'];
  categoryFilters = [
    ['Fruits & Vegetables', '15'],
    ['Bakery, Cake & Dairy', '12'],
    ['Beverages', '20'],
    ['Snacks & Branded Foods', '05'],
    ['Beauty & Household', '30'],
  ];
  preferenceFilters = [
    ['Vegetarian', '08'],
    ['Non Vegetarian', '09'],
  ];
  ratingFilters = ['5 Star', '4 Star', '3 Star', '2 Star', '1 Star'];
  discountFilters = [
    ['upto 5%', '06'],
    ['5% - 10%', '08'],
    ['10% -15%', '10'],
    ['15% - 25%', '14'],
    ['More than 25%', '13'],
  ];
  packFilters = [
    ['400 to 500 g', '05'],
    ['500 to 700 g', '02'],
    ['700 to 1 kg', '04'],
    ['120-150 g each', '06'],
    ['1 pc', '09'],
  ];

  get productList(): ShopProduct[] {
    return [...this.products, ...this.products, ...this.products.slice(0, 2)];
  }

  setViewMode(mode: ShopViewMode): void {
    this.viewMode.set(mode);
  }

  openProductModal(product: ShopProduct): void {
    this.selectedProduct.set(product);
  }

  closeProductModal(): void {
    this.selectedProduct.set(null);
  }

  setMinPrice(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.minPrice.set(Math.min(value, this.maxPrice() - 1000));
  }

  setMaxPrice(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.maxPrice.set(Math.max(value, this.minPrice() + 1000));
  }

  priceTrackStyle(): Record<string, string> {
    const min = (this.minPrice() / 500000) * 100;
    const max = (this.maxPrice() / 500000) * 100;

    return {
      '--range-start': `${min}%`,
      '--range-end': `${max}%`,
    };
  }
  removeTag(index: number, event: Event) {
    event.stopPropagation();
    this.filterTags = this.filterTags.filter((_, i) => i !== index);
  }
}
