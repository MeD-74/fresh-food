import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroBanner {
  mainBanners: any[] = [
    {
      badgeText: 'Exclusive offer',
      discount: '30% Off',
      titlePart1: 'STAY HOME & DELIVERED YOUR',
      titlePart2: 'DAILY NEEDS',
      description: 'Vegetables contain many vitamins and minerals that are good for your health.',
      image: 'assets/images/hero-banner/1.jpg',
      isMain: true,
      class: '', 
    },
    {
      discount: '45%',
      discountLabel: 'OFF',
      title: 'Nut Collection',
      description: 'We deliver organic vegetables & fruits',
      image: 'assets/images/hero-banner/2.jpg',
      isMain: false,
      class: 'side-card-1',
    },
    {
      title: 'Healthy Food',
      subTitle: 'Organic Market',
      description: 'Start your daily shopping with some Organic food',
      image: 'assets/images/hero-banner/3.jpg',
      isMain: false,
      class: 'side-card-2',
    },
  ];

  miniBanners = [
    {
      discount: '5% OFF',
      title: 'Hot Deals on New Items',
      desc: 'Daily Essentials Eggs & Dairy',
      class: 'mini-card-1',
    },
    {
      discount: '5% OFF',
      title: 'Buy More & Save More',
      desc: 'Fresh Vegetables',
      class: 'mini-card-2',
    },
    {
      discount: '5% OFF',
      title: 'Organic Meat Prepared',
      desc: 'Delivered to Your Home',
      class: 'mini-card-3',
    },
    {
      discount: '5% OFF',
      title: 'Buy More & Save More',
      desc: 'Nuts & Snacks',
      class: 'mini-card-4',
    },
  ];
}
