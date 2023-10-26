import { ProductDescriptionComponent } from './store/productDescription.component';
import { DiscountComponent } from './store/discount.component';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      
      { 
        path: "productDescription/:producId", 
        component: ProductDescriptionComponent 
      },
      {
        path: "discount",
        component: DiscountComponent,
      },
      {
        path: "store",
        component: StoreComponent,
      },
      {
        path: "cart",
        component: CartDetailComponent,
      },
      {
        path: "checkout",
        component: CheckoutComponent,
      },

      {
        path: "admin",
        loadChildren: () =>
          import("./admin/admin.module").then((m) => m.AdminModule),
      },

      { path: "**", redirectTo: "/discount" },
    ]),
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
 

/* import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpInterceptorService } from "./Interceptor/httpInterceptor-service";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule,
    FormsModule,
    RouterModule.forRoot([
      // RouterStateTree
      {
        path: "store",
        component: StoreComponent,
      },
      {
        path: "cart",
        component: CartDetailComponent,
      },
      {
        path: "checkout",
        component: CheckoutComponent,
      },
      { path: "**", redirectTo: "/store" },
    ]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],

  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
 */
