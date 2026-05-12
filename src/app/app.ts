import { CommonModule, Location } from '@angular/common';
import { Component, OnDestroy, OnInit, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

import { BlogPage } from './components/blog-page/blog-page';
import { BlogSection } from './components/blog-section/blog-section';
import { CartPage } from './components/cart-page/cart-page';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { HeroBanner } from './components/hero-banner/hero-banner';
import { Newsletter } from './components/newsletter/newsletter';
import { ProductPage } from './components/product-page/product-page';
import { ShopPage } from './components/shop-page/shop-page';
import { AboutUs } from './components/about-us/about-us';
import { ContactPage } from './components/contact-page/contact-page';
import { FaqPage } from './components/faq-page/faq-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Header,
    HeroBanner,
    Newsletter,
    Footer,
    ShopPage,
    ProductPage,
    BlogPage,
    CartPage,
    AboutUs,
    ContactPage,
    FaqPage,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App implements OnInit, OnDestroy {
  title = 'fresh-food';
  readonly isShopPage = signal(false);
  readonly isProductPage = signal(false);
  readonly isBlogPage = signal(false);
  readonly isCartPage = signal(false);
  readonly isAboutPage = signal(false);
  readonly isContactPage = signal(false);
  readonly isFaqPage = signal(false);

  countdown = signal(['14', '23', '57', '23']);
  private countdownTarget =
    Date.now() + 14 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 57 * 60 * 1000 + 23 * 1000;
  private countdownInterval?: ReturnType<typeof setInterval>;

  sideCategories = [
    { name: 'Vegetables & Fruit', icon: 'icons/vegetable.svg' },
    { name: 'Beverages', icon: 'icons/cup.svg' },
    { name: 'Meats & Seafood', icon: 'icons/meats.svg' },
    { name: 'Breakfast & Dairy', icon: 'icons/breakfast.svg' },
    { name: 'Frozen Foods', icon: 'icons/frozen.svg' },
    { name: 'Biscuits & Snacks', icon: 'icons/biscuit.svg' },
    { name: 'Grocery & Staples', icon: 'icons/leaf.svg' },
    { name: 'Wines & Alcohol Drinks', icon: 'icons/drink.svg' },
    { name: 'Milk & Dairies', icon: 'icons/milk.svg' },
    { name: 'Pet Foods', icon: 'icons/pet.svg' },
  ];

  sidebarDeals = [
    { name: 'Organic Tomato', qty: '1 KG', price: '20.00', img: 'products/17.png' },
    { name: 'Cold Brew Coffee', qty: '450 G', price: '40.00', img: 'products/6.png' },
    { name: 'Good Life Walnut Kernels', qty: '200 G', price: '52.00', img: 'products/20.png' },
    { name: 'Apple Red Premium Imported', qty: '1 KG', price: '80.00', img: 'products/22.png' },
  ];

  products = [
    {
      name: 'Fantasy Crunchy Choco Chip Cookies',
      price: '26.69',
      oldPrice: '28.56',
      image: 'products/1.png',
      tag: '',
    },
    {
      name: 'Peanut Butter Bite Premium Butter Cookies 600 g',
      price: '26.69',
      oldPrice: '28.56',
      image: 'products/2.png',
      tag: '',
    },
    {
      name: 'Yumitos Chilli Sprinkled Potato Chips 100 g',
      price: '26.69',
      oldPrice: '28.56',
      image: 'products/3.png',
      tag: '',
    },
    {
      name: 'healthy Long Life Toned Milk 1 L',
      price: '26.69',
      oldPrice: '28.56',
      image: 'products/4.png',
      tag: 'NEW',
    },
    {
      name: 'Raw Mutton Leg, Packaging 5 Kg',
      price: '26.69',
      oldPrice: '28.56',
      image: 'products/5.png',
      tag: '',
    },
    {
      name: 'Cold Brew Coffee Instant Coffee 50 g',
      price: '26.69',
      oldPrice: '28.56',
      image: 'products/6.png',
      tag: '',
    },
    {
      name: 'SnackAmor Combo Pack of Jowar Stick and Jowar Chips',
      price: '26.69',
      oldPrice: '28.56',
      image: 'products/7.png',
      tag: 'NEW',
    },
    {
      name: 'Neu Farm Unpolished Desi Toor Dal 1 kg',
      price: '26.69',
      oldPrice: '28.56',
      image: 'products/8.png',
      tag: '',
    },
    {
      name: 'Dog Treats Natural Yak Milk Bars For Small Dogs 100g',
      price: '26.69',
      oldPrice: '28.56',
      image: 'products/9.png',
      tag: '',
    },
    {
      name: 'Blended Instant Coffee 50 g Buy 1 Get 1 Free',
      price: '26.69',
      oldPrice: '28.56',
      image: 'products/10.png',
      tag: '',
    },
  ];

  cupboardProducts = [
    { name: 'Chocolate Powder', price: '26.69', oldPrice: '28.56', image: 'products/1.png' },
    { name: 'Sandwich Cookies', price: '26.69', oldPrice: '28.56', image: 'products/6.png' },
    { name: 'Butter Croissant', price: '26.69', oldPrice: '28.56', image: 'products/2.png' },
    { name: 'Dark Chocolate', price: '26.69', oldPrice: '28.56', image: 'products/7.png' },
    { name: 'Mix-sweet-food', price: '26.69', oldPrice: '28.56', image: 'products/3.png' },
  ];

  categories = [
    { name: 'Vegetables &...', icon: 'icons/vegetable.svg' },
    { name: 'Beverages', icon: 'icons/cup.svg' },
    { name: 'Meats & Seafood', icon: 'icons/meats.svg' },
    { name: 'Breakfast', icon: 'icons/breakfast.svg' },
    { name: 'Frozen Foods', icon: 'icons/frozen.svg' },
    { name: 'Milk & Dairies', icon: 'icons/milk.svg' },
    { name: 'Pet Food', icon: 'icons/pet.svg' },
  ];

  miniPromos = [
    { title: '50% offer', subtitle: 'Testy Mushrooms', image: 'New folder/9.jpg' },
    { title: '50% offer', subtitle: 'Fresh MEAT', image: 'New folder/10.jpg' },
  ];

  bestSellerProducts = [
    [
      { name: 'Tuffets Whole Wheat Bread', price: '10.00', qty: '500 G', img: 'products/11.png' },
      { name: 'Potato', price: '10.00', qty: '500 G', img: 'products/12.png' },
      { name: 'Green Chilli', price: '10.00', qty: '200 G', img: 'products/13.png' },
    ],
    [
      { name: 'Tuffets Britannia Cheezza', price: '10.00', qty: '500 G', img: 'products/15.png' },
      { name: 'Long Life Toned Milk', price: '10.00', qty: '1 L', img: 'products/16.png' },
      { name: 'Organic Tomato', price: '10.00', qty: '1 KG', img: 'products/17.png' },
    ],
    [
      {
        name: 'Good Life Refined Sunflower Oil',
        price: '10.00',
        qty: '1 L',
        img: 'products/19.png',
      },
      { name: 'Good Life Raw Peanuts', price: '10.00', qty: '500 G', img: 'products/20.png' },
      { name: 'TufBest Farms Mong Dal', price: '10.00', qty: '1 KG', img: 'products/21.png' },
    ],
  ];

  blogPosts = [
    { title: 'Fresh Vegetable Online', date: '20 March, 2022', img: 'featured-blog/1.jpg' },
    { title: 'Fresh Combo Fruit', date: '10 April, 2022', img: 'featured-blog/2.jpg' },
    { title: 'Nuts to Eat for Better Health', date: '10 April, 2022', img: 'featured-blog/3.jpg' },
  ];

  constructor(private location: Location) {}

  ngOnInit(): void {
    const currentPath = this.location.path();

    this.isProductPage.set(
      currentPath.startsWith('/product') || currentPath.includes('page=product'),
    );

    this.isShopPage.set(currentPath.startsWith('/shop') || currentPath.includes('page=shop'));

    this.isBlogPage.set(currentPath.startsWith('/blog') || currentPath.includes('page=blog-page'));

    this.isCartPage.set(
      currentPath.startsWith('/cart') ||
        currentPath.startsWith('/checkout') ||
        currentPath.includes('page=cart') ||
        currentPath.includes('page=checkout'),
    );

    this.isAboutPage.set(currentPath.startsWith('/about') || currentPath.includes('page=about'));
    this.isContactPage.set(
      currentPath.startsWith('/contact') || currentPath.includes('page=contact'),
    );
    this.isFaqPage.set(currentPath.startsWith('/faq') || currentPath.includes('page=faq'));

    this.updateCountdown();
    this.countdownInterval = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  private updateCountdown(): void {
    const remaining = Math.max(0, this.countdownTarget - Date.now());
    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining % 86400000) / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);

    this.countdown.set(
      [days, hours, minutes, seconds].map((value) => value.toString().padStart(2, '0')),
    );
  }
}
