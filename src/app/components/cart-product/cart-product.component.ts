import { Component, OnInit, Input } from '@angular/core';

import { Product } from "../../models/product";

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

	constructor() {
	}

	@Input() cartProduct: Product;

	ngOnInit() {
	}

}
