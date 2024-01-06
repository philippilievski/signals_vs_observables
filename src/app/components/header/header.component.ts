import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartService = inject(CartService);
  cart = this.cartService.cart();


  ngOnInit() {
    console.log(this.cart);
  }
}
