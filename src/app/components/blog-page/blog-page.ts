import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Footer } from '../footer/footer';

type BlogPost = {
  author: string;
  image: string;
  popular?: boolean;
  title: string;
};

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [CommonModule, Footer],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.scss',
})
export class BlogPage {
  readonly isDetailPage = signal(false);

  constructor() {
    if (typeof globalThis.location !== 'undefined') {
      this.isDetailPage.set(
        globalThis.location.pathname.includes('blog-detail') ||
          globalThis.location.search.includes('page=blog-detail'),
      );
    }
  }

  recentPosts = [
    { image: 'featured-blog/1.jpg', title: 'Green onion knife and salad placed' },
    { image: 'featured-blog/2.jpg', title: 'Health and skin for your organic' },
    { image: 'featured-blog/3.jpg', title: 'Organics mix masala fresh & soft' },
    { image: 'New folder/12.jpg', title: 'Fresh organics brand and picnic' },
  ];

  categories = [
    ['Latest Recipes', '10'],
    ['Diet Food', '6'],
    ['Low calorie Items', '8'],
    ['Cooking Method', '9'],
    ['Dairy Free', '12'],
    ['Vegetarian Food', '10'],
  ];

  tags = ['Fruit Cutting', 'Meat', 'Organic', 'Cake', 'Pick Fruit', 'Backery', 'Organix Food', 'Most Expensive Fruit'];

  trendingProducts = [
    { image: 'products/23.png', name: 'Meatigo Premium Goat Curry', qty: '450 G', price: '70.00' },
    { image: 'products/24.png', name: 'Dates Medjoul Premium Imported', qty: '450 G', price: '40.00' },
    { image: 'products/26.png', name: 'Apple Red Premium Imported', qty: '1 KG', price: '80.00' },
  ];

  posts: BlogPost[] = [
    { image: 'featured-blog/1.jpg', author: 'MARK J. SPEIGHT', title: 'One Pot Creamy Mediterranean Chicken Pasta Cream.' },
    { image: 'featured-blog/2.jpg', author: 'REBEUS HAGRID', title: 'Crispy Frozen Vegetable Is The On The Tempura.' },
    { image: 'featured-blog/3.jpg', author: 'CHRIS C. HALL', title: 'How To Start Regrowing Green Onions And Other Vegetables.', popular: true },
    { image: 'New folder/12.jpg', author: 'JAMES M. MARTIN', title: 'Starting A Vegetable Garden: The Basics.' },
    { image: 'New folder/14.jpg', author: 'CECIL M. LEVIS', title: 'Adapt This Simple Pasta Salad To Whatever Vegetable.' },
    { image: 'featured-blog/1.jpg', author: 'MARY R. HERNANDEZ', title: "With Chefs Idle And Vegetables Rotting, China's Virus-Hit." },
    { image: 'featured-blog/2.jpg', author: 'CHERYL D. MOSER', title: 'Turn That Bowl Of Pasta Into A Supercharged Veggie Vehicle.' },
    { image: 'featured-blog/3.jpg', author: 'MINA M. SHORT', title: 'Health, Care And Skin On The For Your Organic.' },
    { image: 'New folder/12.jpg', author: 'MARIE S. SANTIAGO', title: 'Fresh Organicsm, Brand, Fresh And Picnic Place Awesome.' },
    { image: 'featured-blog/3.jpg', author: 'MARK J. SPEIGHT', title: "With Chefs Idle And Vegetables Rotting, China's Virus-Hit.", popular: true },
    { image: 'New folder/12.jpg', author: 'CHRIS C. HALL', title: 'Vegina Good Quality Special Liquide Fesh Vegetables.' },
    { image: 'New folder/14.jpg', author: 'JAMES M. MARTIN', title: 'How To Freeze Fresh Vegetables While Preserving Their Best Qualities.' },
  ];

  comments = [
    {
      avatar: 'New folder (2)/1.jpg',
      name: 'Glenn Greer',
      text: 'This proposal is a win-win situation which will cause a stellar paradigm shift, and produce a multi-fold increase in deliverables a better understanding',
    },
    {
      avatar: 'products/26.png',
      name: 'Glenn Greer',
      text: "Yeah, I think maybe you do. Right, gimme a Pepsi free. Of course, the Enchantment Under The Sea Dance they're supposed to go to this, that's where they kiss for the first time.",
    },
    {
      avatar: 'products/11.png',
      name: 'Glenn Greer',
      text: "Cheese slices goat cottage cheese roquefort cream cheese pecorino cheesy feet when the cheese comes out everybody's happy",
    },
  ];

  get pageTitle(): string {
    return this.isDetailPage() ? 'Blog Details Page' : 'Blog Grid';
  }
}
