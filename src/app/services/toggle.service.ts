import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  private toggleMobileMenu: boolean = false;
  private subjectMobileMenu = new Subject<boolean>();

  constructor() { }

  setToggleMenu(status: boolean) {
    this.toggleMobileMenu = status;
    this.subjectMobileMenu.next(this.toggleMobileMenu);
  }

  isMenuToggled() {
    return this.subjectMobileMenu.asObservable();
  }
}
