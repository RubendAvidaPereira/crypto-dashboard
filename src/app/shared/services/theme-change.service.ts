import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class ThemeChangeService {

  // Theme Boolean Check State
  // If false, theme is dark
  checkTheme: boolean = true

  // Charts
  options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      }
    }
  }

  constructor(@Inject(DOCUMENT) private document: Document) { }

  switchTheme(theme: string) {
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
        themeLink.href = theme + '.css';
    }
  }
}
