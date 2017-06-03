import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { Product } from "../models/product";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable()
export class ListingsService{
	constructor(private _http: Http){
	}

	private listingApiUrl: string = "http://localhost:3000/products";

	private errorHandler(err: any){
		console.log(err);
		return Observable.throw(err);
	}

	getAll(): Observable<Array<Product>>{
			return this._http.get(this.listingApiUrl)
								.map((res)=> res.json())
								.catch(this.errorHandler);
	}

}
