import { AuthService } from "./auth.service";
import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { DiscountRepository } from "./discount.repository";

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ProductRepository,
    Cart,
    Order,
    OrderRepository,
    { provide: StaticDataSource, useClass: RestDataSource },
    RestDataSource,
    AuthService,
    DiscountRepository
  ],
})
export class ModelModule {}

// services are called as shared(by nature)
