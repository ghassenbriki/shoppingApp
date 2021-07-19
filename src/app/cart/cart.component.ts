import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service'
import {Product} from '../product'
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Product[]


  remove(prod :Product)
  {
    this.cartService.removeOneItem(prod)
  
  }


  constructor(private cartService:CartService) 
  { 
   
    this.items=this.cartService.getItems()
  }



  ngOnInit(): void {
    this.items=this.cartService.getItems()
  }

}
