import { Component, OnInit } from '@angular/core';

import { CartService } from "../../services/cart.service";

import { Product } from "../../models/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	constructor(private _cartService: CartService) {
    }

    cartProducts: Array<Product> = [];
	_totallAmount: number = 0;
	shippingInfo = {
	    "title": "Shipping",
	    "image_url": "",
	    "price": "49 kr",
	    "price_amount": 49
	};

    ngOnInit() {
  	  this.updateCartComponent();
    }

	removeProductHandler(i){
		this._cartService.remove(i);
		this.updateCartComponent();
	}

	updateCartComponent(): void{
		this.cartProducts = this._cartService.getCart();
		this._totallAmount = this._cartService.totallAmount();
	}

	checkoutHandler(){
		console.log("Someday submit the Order!");
	}

}
