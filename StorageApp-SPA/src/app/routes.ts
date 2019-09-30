import { Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductService } from './_services/product.service';
import { ProductListResolver } from './_resolvers/product-list.resolver';
import { RegisterProductComponent } from './register-product/register-product.component';

export const appRoutes: Routes = [
    { path: '', component: ProductListComponent, resolve: { products: ProductListResolver }},
    { path: 'add-product', component: RegisterProductComponent},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

