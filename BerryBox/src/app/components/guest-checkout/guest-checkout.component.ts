import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guest-checkout',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './guest-checkout.component.html',
  styleUrls: ['./guest-checkout.component.css']
})
export class GuestCheckoutComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  placeOrderAsGuest(): void {
    console.log("Order placed as guest:", this.cartItems);
    this.cartService.clearCart();
  }
}
