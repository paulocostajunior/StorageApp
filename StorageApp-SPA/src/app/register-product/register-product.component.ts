import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Product } from '../_models/product';
import { ProductService } from '../_services/product.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {
  product: Product;
  registerProductForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.createRegisterProductForm();
  }

  createRegisterProductForm() {
    this.registerProductForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      packageTypeId: [1]
    });
  }

  register() {
    if (this.registerProductForm.valid) {
      this.product = Object.assign({}, this.registerProductForm.value);
      console.log(this.product);
      this.productService.register(this.product).subscribe(
        () => {
          console.log('Cadastro Inserido com sucesso');
          this.router.navigate(['./']);
        },
        error => {
          console.log('Erro ao tentar inserir');
        });
    }
  }
}
