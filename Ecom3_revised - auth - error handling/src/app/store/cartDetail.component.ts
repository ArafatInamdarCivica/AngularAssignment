import { DiscountRepository } from './../model/discount.repository';
import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { templateJitUrl } from '@angular/compiler';

@Component({
    templateUrl: "cartDetail.component.html"
})
export class CartDetailComponent {

    public discountValue : number = 0;
    public isDiscountAdded: boolean = false;
    public isDiscountAvailable: boolean = false;

    constructor(public cart: Cart, public discount: DiscountRepository) {
        this.discountValue = this.discount.getDiscount();
        if(this.discountValue ==0 ){
            this.isDiscountAvailable = true;
        }
    }

    applyDiscount(){
        if(this.discountValue>0){
            this.isDiscountAdded = true;
        }
    }
}