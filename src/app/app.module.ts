import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { ListingsComponent } from './pages/listings/listings.component';
import { CartComponent } from './pages/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BasketComponent } from './components/basket/basket.component';
import { CrossComponent } from './components/cross/cross.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';

//for large scale app I definately use seprate routes file
const routes: Routes = [
	{ path: "", component: ListingsComponent, pathMatch: "full" },
	{ path: "cart", component: CartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    CartComponent,
    NavbarComponent,
    ProductCardComponent,
    BasketComponent,
    CrossComponent,
    CartProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
