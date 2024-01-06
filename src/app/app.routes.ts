import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ItemsListComponent } from './components/items-list/items-list.component';

export const routes: Routes = [
    { path: "", component: ItemsListComponent },
    { path: "cart", component: CartComponent}  
];
