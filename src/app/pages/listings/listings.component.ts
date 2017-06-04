import { Component, OnInit, DoCheck } from '@angular/core';

import { ListingsService } from "../../services/listings.service";
import { CartService } from "../../services/cart.service";

import { Product } from "../../models/product";

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  constructor(private _listingsService: ListingsService,
	  		  private _cartService: CartService) {
  }

  products: Array<Product> = [];
  totallProducts: number = 0;

  ngOnInit() {
	  this._listingsService.getAll()
	  						.subscribe(
								(xec: Array<Product>)=> { this.products = xec },
								(err)=> console.log("this is err",err),
							);
	  this.totallProducts = this._cartService.totallProducts();
  }

  productClickHandler(product: Product): void{
	  this._cartService.add(product);
	  this.totallProducts = this._cartService.totallProducts();
  }

}
