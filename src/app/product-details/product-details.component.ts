import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Product,products} from '../product'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


product :Product | undefined

  constructor(private route:ActivatedRoute) 
  {
    

  }

  ngOnInit(): void 
  {
    const id=Number(this.route.snapshot.paramMap.get('productId'))
    this.product=products.filter(product => product.id === id)[0];
    console.log(this.product)

    
  }

}
