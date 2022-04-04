import { Component, OnInit } from '@angular/core';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuToggled: boolean = false;

  constructor(private toggleSrv: ToggleService) {
    this.toggleSrv.isMenuToggled().subscribe((res: boolean) => {
      this.menuToggled = res;
    })
  }

  ngOnInit(): void {
    console.log(this.menuToggled);
  }

  menuToggler(): void {
    this.toggleSrv.setToggleMenu(!this.menuToggled);
    console.log(this.menuToggled);

  }

}
