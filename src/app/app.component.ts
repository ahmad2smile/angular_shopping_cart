import { Component } from '@angular/core';

import { ListingsService } from "./services/listings.service";
import { CartService } from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
	  ListingsService,
	  CartService
  ]
})
export class AppComponent {
  title = 'app works!';
}
