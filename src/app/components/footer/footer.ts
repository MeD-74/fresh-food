import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  activeSection: string | null = null;
  toggleSection(section: string) {
    this.activeSection = this.activeSection === section ? null : section;
  }
}
