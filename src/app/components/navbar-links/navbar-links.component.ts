import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-links',
  template: `
    <ul class="header__nav__list">
      <li class="header__nav__list__item"><a class="header__nav__list__item__link" href="#">Home</a></li>
      <li class="header__nav__list__item"><a class="header__nav__list__item__link" href="#">Headphones</a></li>
      <li class="header__nav__list__item"><a class="header__nav__list__item__link" href="#">Speakers</a></li>
      <li class="header__nav__list__item"><a class="header__nav__list__item__link" href="#">Earphones</a></li>
    </ul>
  `,
  styles: [`
    .header__nav__list {
      padding: 0;
    }
    .header__nav__list__item {
      display: inline-block;
    }

    .header__nav__list__item__link {
      color: var(--light-1);
      text-decoration: none;
      text-transform: uppercase;
      &:hover {
        color: var(--main-1);
      }
    }
  `]
})
export class NavbarLinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
