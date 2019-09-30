import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import { NavComponent } from './nav/nav.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductService } from './_services/product.service';
import { ProductListResolver } from './_resolvers/product-list.resolver';
import { RegisterProductComponent } from './register-product/register-product.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      ProductCardComponent,
      ProductListComponent,
      RegisterProductComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      FilterPipeModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      ProductService,
      ProductListResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
