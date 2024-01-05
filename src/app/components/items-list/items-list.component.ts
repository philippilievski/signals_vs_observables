import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Item } from '../../entities/item';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent {
  itemsService = inject(ItemsService);
  items = this.itemsService.allItems;

  newItemFormGroup = new FormGroup( {
    id: new FormControl(100),
    name: new FormControl(''),
    isRound: new FormControl(false),
    price: new FormControl(),
  })

  // addItemForm = new FormGroup()

  constructor() {
  }

  ngOnInit() {
  }

  addNewItem() {
    this.itemsService.addItem(this.newItemFormGroup.value as Item);
  }
}
