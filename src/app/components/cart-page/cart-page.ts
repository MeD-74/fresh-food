import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Footer } from '../footer/footer';

type CartItem = {
  id: number;
  name: string;
  seller: string;
  quantity: string;
  image: string;
  price: number;
  oldPrice: number;
  count: number;
};

type CheckoutProduct = {
  name: string;
  image: string;
  qty: number;
  price: number;
};

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, Footer],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.scss',
})
export class CartPage {
  readonly isCheckoutPage = signal(false);
  readonly couponCode = signal('');
  readonly couponApplied = signal(false);
  readonly selectedAddress = signal('office');
  readonly deliveryOption = signal('standard');
  readonly paymentMethod = signal('cod');

  readonly shipping = 6.9;

  readonly cartItems = signal<CartItem[]>([
    {
      id: 1,
      name: 'Bell pepper',
      seller: 'Fresho',
      quantity: '500 g',
      image: 'products/1.png',
      price: 35.1,
      oldPrice: 45.68,
      count: 1,
    },
    {
      id: 2,
      name: 'Eggplant',
      seller: 'Nesto',
      quantity: '250 g',
      image: 'products/6.png',
      price: 52.95,
      oldPrice: 68.49,
      count: 1,
    },
    {
      id: 3,
      name: 'Onion',
      seller: 'Basket',
      quantity: '750 g',
      image: 'products/2.png',
      price: 67.36,
      oldPrice: 96.58,
      count: 1,
    },
  ]);

  readonly checkoutProducts: CheckoutProduct[] = [
    { name: 'Bell pepper', qty: 1, price: 32.34, image: 'products/1.png' },
    { name: 'Eggplant', qty: 3, price: 12.23, image: 'products/6.png' },
    { name: 'Onion', qty: 2, price: 18.27, image: 'products/2.png' },
    { name: 'Potato', qty: 1, price: 26.9, image: 'products/7.png' },
    { name: 'Baby Chili', qty: 1, price: 19.28, image: 'products/3.png' },
    { name: 'Broccoli', qty: 2, price: 29.69, image: 'products/8.png' },
  ];

  readonly subtotal = computed(() =>
    this.cartItems().reduce((total, item) => total + item.price * item.count, 0),
  );

  readonly couponDiscount = computed(() => (this.couponApplied() ? 10 : 0));
  readonly cartTotal = computed(() =>
    Math.max(0, this.subtotal() + this.shipping - this.couponDiscount()),
  );

  constructor() {
    if (typeof globalThis.location !== 'undefined') {
      this.isCheckoutPage.set(
        globalThis.location.pathname.startsWith('/checkout') ||
          globalThis.location.search.includes('page=checkout'),
      );
    }
  }

  incrementItem(id: number): void {
    this.cartItems.update((items) =>
      items.map((item) => (item.id === id ? { ...item, count: item.count + 1 } : item)),
    );
  }

  decrementItem(id: number): void {
    this.cartItems.update((items) =>
      items.map((item) =>
        item.id === id ? { ...item, count: Math.max(0, item.count - 1) } : item,
      ),
    );
  }

  removeItem(id: number): void {
    this.cartItems.update((items) => items.filter((item) => item.id !== id));
  }

  setCouponCode(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.couponCode.set(input.value);
    if (!input.value.trim()) {
      this.couponApplied.set(false);
    }
  }

  applyCoupon(): void {
    this.couponApplied.set(this.couponCode().trim().length > 0);
  }

  selectAddress(address: string): void {
    this.selectedAddress.set(address);
  }

  selectDelivery(option: string): void {
    this.deliveryOption.set(option);
  }

  selectPayment(method: string): void {
    this.paymentMethod.set(method);
  }

  lineTotal(item: CartItem): number {
    return item.price * item.count;
  }

  saveAmount(item: CartItem): number {
    return Math.max(0, item.oldPrice - item.price);
  }

  formatPrice(value: number): string {
    return value.toFixed(2);
  }
}
