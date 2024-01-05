import { AsyncPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent {
  itemsService = inject(ItemsService);
  items = this.itemsService.items;
  constructor() {
  }

  ngOnInit() {
  }
}
