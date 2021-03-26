import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  removeItem(p: any) {
    throw new Error('Method not implemented.');
  }
  shoppingCart_items: any[]=[];

  constructor() { }

  addProduct = (product)=>{
    // console.log("added", product)
    // localStorage.setItem('shoppingCart', JSON.stringify(product))
    let items = this.getShoppingCartItems();
    if(items){
      items.push(product)
      localStorage.setItem('shoppingCart', JSON.stringify(items))

    }else{
      this.shoppingCart_items.push(product);
       localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart_items))
    }
   }
  
  
  getShoppingCartItems = ()=> {
    let items = localStorage.getItem('shoppingCart')
    return JSON.parse(items)
  }

  getCartLength = ()=> {
    let items = this.getShoppingCartItems();
    return items? this.getShoppingCartItems().length: 0
  }

  getTotal = ()=> {
    let items = this.getShoppingCartItems();
    return items?.reduce((acc, item)=> acc+item.price, 0)
  }

  removerItem = (p)=> {
    console.log('calling remover', p)
    let items = this.getShoppingCartItems();

    const index= items.findIndex(item => item.id == p.id);
    if(index>=0) {
      console.log('hitting if')
      items.splice(index, 1);
      return localStorage.setItem('shoppingCart', JSON.stringify(items))
    }
  }
}


