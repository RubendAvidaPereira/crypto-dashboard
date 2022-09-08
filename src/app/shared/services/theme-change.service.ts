import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class ThemeChangeService {

  // Theme Boolean Check State
  // If false, theme is light
  checkTheme: boolean = false

  // Charts
  options: any

  constructor( @Inject(DOCUMENT) private document: Document) { }

  updateChartOptions() {
    // Light Mode
    if (!this.checkTheme){
      this.options = {
        plugins: {
          legend: {
            labels: {
              color: "#000000"
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: "#000000"
            },
          },
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            ticks: {
              color: "#000000"
            }
          }
        }
      }
    }
    // Dark Mode
    else {
      this.options = {
        plugins: {
          legend: {
            labels: {
              color: "#FFFFFF"
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: "#FFFFFF"
            },
          },
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            ticks: {
              color: "#FFFFFF"
            }
          }
        }
      }
    }
  }

  switchTheme(theme: string) {
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
        themeLink.href = theme + '.css';
    }
  }
}
