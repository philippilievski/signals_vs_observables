import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Item } from '../../entities/item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent {
  itemsService = inject(ItemsService);
  cartService = inject(CartService);
  items = this.itemsService.allItems;

  newItemFormGroup = new FormGroup( {
    id: new FormControl(100),
    name: new FormControl(''),
    isRound: new FormControl(false),
    price: new FormControl(),
  })

  constructor() {
  }

  addNewItem() {
    this.itemsService.addItem(this.newItemFormGroup.value as Item);
  }

  addToCart(item: Item) {
    this.cartService.addItemToCart(item);
    console.log(this.cartService.cart());
  }
}
