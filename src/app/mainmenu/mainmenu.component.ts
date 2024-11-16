import {Component} from '@angular/core';

import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

@Component({
  selector: 'app-mainmenu',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent {

}
