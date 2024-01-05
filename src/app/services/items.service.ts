import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, Signal, WritableSignal, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../entities/item';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private httpClient = inject(HttpClient);
  items: Observable<Item[]> = this.httpClient.get<Item[]>('/assets/data/items.json');
  constructor() {
  }    
}
