import { ProductRepository } from './../model/product.repository';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
    selector: 'product-description',
    templateUrl: './productDescription.component.html'
})

export class ProductDescriptionComponent{
    public product: Product = new Product();
    constructor(activeRoute: ActivatedRoute, private repository: ProductRepository) {
          Object.assign(
            this.product,
            repository.getProduct(activeRoute.snapshot.params["producId"])
          );
    }
}