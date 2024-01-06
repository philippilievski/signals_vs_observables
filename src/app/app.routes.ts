import { Routes } from '@angular/router';
import { MainLayoutComponent } from './views/main-layout/main-layout.component';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './components/items-list/items-list.component';

export const routes: Routes = [
    { path: "", component: ItemsListComponent }  
];
