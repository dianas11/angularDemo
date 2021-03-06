import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ShoppingCartService } from 'src/app/SERVICE/shopping-cart.service';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {
  @Input() checkout_products: any [];
  @Output() deleteEvent: EventEmitter<any> =new EventEmitter()

  constructor(public shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    console.log('products', this.checkout_products)
  }

  removeItem(p) {
    this.shoppingCartService.removerItem(p)
    this.deleteEvent.emit(p)
    
  }

}
