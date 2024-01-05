import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Item, items } from '../entities/item';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  allItems = signal<Item[]>(items);

  constructor() {
  }    

  addItem(newItem: Item) {
    this.allItems.update((items) => [...items, newItem])
  }
}
