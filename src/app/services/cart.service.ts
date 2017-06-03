import { Injectable } from "@angular/core";

import { Product } from "../models/product";

@Injectable()
export class CartService{

	cartProducts: Array<Product> = [];

	add(product: Product): void{
		let cartHasProduct = this.cartProducts.some((p)=>
									JSON.stringify(p) === JSON.stringify(product));
		if (!cartHasProduct) {
		    this.cartProducts.push(product);
		}
	}

	remove(product: Product): void{

	}

	totallProducts(): number{
		return this.cartProducts.length;
	}

	totallAmount(): number{
		return 0;
	}

}
