import { Injectable } from '@angular/core';
import {Product} from './product'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items : Product[]=[]

  constructor() { }

  addToCart(prod:Product)
  {
    this.items.push(prod)
  }

  removeOneItem(prod:Product)
  {
     
     let index=this.items.indexOf(prod)
      if(index==-1)
        console.log('item does not exist')
      else
      {
        this.items.splice(index,1)
        console.log(this.items)
      }

  }

  getItems() {
    return this.items;
  }

}
