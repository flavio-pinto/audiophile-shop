import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleService } from './services/toggle.service';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-toggle-menu *ngIf="menuToggled"></app-toggle-menu>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'audiophile-shop';
  menuToggled: boolean = false;

  constructor(private router: Router, private toggleSrv: ToggleService) {
    this.toggleSrv.isMenuToggled().subscribe((res: boolean) => {
      this.menuToggled = res;
    })
  }
}
