import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-page.html',
  styleUrl: './faq-page.scss',
})
export class FaqPage {
  openIndex = signal<number | null>(0);

  toggleAccordion(index: number) {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
