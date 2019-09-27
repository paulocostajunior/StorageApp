import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { ProductService } from '../../_services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  constructor(private productService: ProductService) {}

  ngOnInit() {
  }

  addProduct() {
    this.product.quantity ++;
    this.updateProduct(this.product.id, this.product);
  }

  subtractProduct() {
    if (this.product.quantity > 0) {
      this.product.quantity --;
      this.updateProduct(this.product.id, this.product);
    }
  }

  updateProduct(productId: number, product: Product) {
    this.productService.updateQuantity(productId, product).subscribe();
  }
}
