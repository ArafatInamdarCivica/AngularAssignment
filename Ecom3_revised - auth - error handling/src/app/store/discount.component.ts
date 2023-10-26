import { Router } from '@angular/router';
import { DiscountRepository } from './../model/discount.repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html'
})
export class DiscountComponent{

  constructor(private discount : DiscountRepository, private router: Router) { }

  addDiscount(){
    this.discount.addDiscount(10);
    this.router.navigateByUrl("/store");
  }
  
  skipDiscount(){
    this.router.navigateByUrl("/store");
  }
}
