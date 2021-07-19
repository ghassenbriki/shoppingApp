import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Product,products} from '../product'
import {CartService} from '../cart.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


product :Product | undefined

  constructor(private route:ActivatedRoute, private cartservice:CartService) 
  {
    
  }

  addTochart(prod:Product)
  {
    this.cartservice.addToCart(prod)
    window.alert('The product has been added to chart!');
  }
  ngOnInit(): void 
  {
    const id=Number(this.route.snapshot.paramMap.get('productId'))
    this.product=products.filter(product => product.id === id)[0];
    

    
  }

}
