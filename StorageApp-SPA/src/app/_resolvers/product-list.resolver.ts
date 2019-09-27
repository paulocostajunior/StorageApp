import { Injectable } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Product } from '../_models/product';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProductListResolver implements Resolve<Product[]> {

    constructor(private productService: ProductService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Product[]> {
        return this.productService.getUsers().pipe(
            catchError(error => {
                console.log(error);
                return of(null);
            })
        );
    }
}
