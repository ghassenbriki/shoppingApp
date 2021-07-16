import { Component, OnInit } from '@angular/core';
import {products} from '../product';
import {Product} from '../product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  prods:Product[]


  share() {
    window.alert('The product has been shared!');
  }

  onNotify()
  {
    window.alert('You will be notified when the product goes on sale');
  }

  constructor() 
  { 

  }

  ngOnInit(): void
   {
    this.prods=products
  }

 

}
