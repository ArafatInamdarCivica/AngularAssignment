import { Injectable } from "@angular/core";

@Injectable()
export class CouponRepository {
    private discountPercentage:number = 0;

    setDiscount(discountPercent:number){
        this.discountPercentage = discountPercent;
    }
}