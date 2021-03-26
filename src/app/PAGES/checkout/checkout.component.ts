import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICE/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items: any [];

  constructor(public shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
    this.getShoppingCart()
    
  }

  getShoppingCart() {
    this.items = this.shoppingCart.getShoppingCartItems();
  }

  deleteEventHandler(p) {
    console.log("event handler")
    this.getShoppingCart()
  }

  
}
