import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../_models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getUsers(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl + 'products');
    }

    updateQuantity(id: number, product: Product) {
        return this.http.put(this.baseUrl + 'products/' + id, product);
    }

    register(product: Product) {
        return this.http.post(this.baseUrl + 'products/register', product);
    }
}
