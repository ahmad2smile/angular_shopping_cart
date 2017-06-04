import { Injectable } from "@angular/core";

import { Product } from "../models/product";

@Injectable()
export class CartService{
	constructor(){
		this.getLocalCart();
	}

	private cartProducts: Array<Product> = [];
	private shippingFee: number = 49;

	add(product: Product): void{
		let cartHasProduct = this.cartProducts.some((p)=>
									JSON.stringify(p) === JSON.stringify(product));
		if (!cartHasProduct) {
		    this.cartProducts.push(product);
			this.storeLocalCart(this.cartProducts);
		}
	}

	remove(productIndex: number): void{
		this.cartProducts.splice(productIndex, 1);
		this.storeLocalCart(this.cartProducts);
		this.getLocalCart();
	}

	getCart(): Array<Product>{
		return [...this.cartProducts];
	}

	storeLocalCart(cartProducts: Array<Product>){
		localStorage.setItem("totallItems", JSON.stringify(cartProducts.length));

		let cleanProductsArray = cartProducts.filter((p)=> p != undefined );

		cleanProductsArray.forEach((p, index)=>{
			localStorage.setItem(JSON.stringify(index), JSON.stringify(p));
		});
	}

	getLocalCart(){
		let storedCartProducts: Array<Product> = [];
		let totallItems: number = Number(localStorage.getItem("totallItems"));
		if (totallItems) {
			for (let i = 0; i < totallItems; i++) {
			    let storeObj = localStorage.getItem(JSON.stringify(i));
				storedCartProducts.push(JSON.parse(storeObj));
			}
		}
		this.cartProducts = [...storedCartProducts];
	}

	totallProducts(): number{
		return this.cartProducts.length;
	}

	totallAmount(): number{
		if(this.cartProducts.length > 1){
			let _totallAmount = this.cartProducts.map((p)=> p.price_amount)
												 .reduce((acc, curr)=> acc + curr);
			return _totallAmount + this.shippingFee;
		}else if (this.cartProducts.length === 1) {
		    return this.cartProducts[0].price_amount + this.shippingFee;
		}else if(this.cartProducts.length === 0){
			return 0;
		}
	}

}
