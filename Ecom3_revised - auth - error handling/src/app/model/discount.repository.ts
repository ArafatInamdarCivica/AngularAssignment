import { Injectable } from "@angular/core";

@Injectable()
export class DiscountRepository {
  private discountPercent: number = 0;

  addDiscount(discountPercent:number){
    this.discountPercent = discountPercent;
  }

  getDiscount(){
    return this.discountPercent;
  }
}