import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICE/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class PRODUCTSComponent implements OnInit {
  
  @Input() products: any [];

  constructor(private shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  addToCart(p) {
    console.log("added to cart");
    this.shoppingCart.addProduct(p);
  }

}
