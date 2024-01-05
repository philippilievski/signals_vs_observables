import { Injectable, signal } from '@angular/core';
import { Cart } from '../entities/cart';
import { Item } from '../entities/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Cart>(new Cart());
  constructor() { }

  addItemToCart(item: Item) {
    this.cart.update((cart) => {
      cart.items.push(item);
      return cart;
    });
  }
}
