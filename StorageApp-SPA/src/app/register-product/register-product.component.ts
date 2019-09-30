import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Product } from '../_models/product';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {
  product: Product;
  registerProductForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createRegisterProductForm();
  }

  createRegisterProductForm() {
    this.registerProductForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      packageType: ['1']
    });
  }

  register() {
    this.product = Object.assign({}, this.registerProductForm.value);
    console.log(this.product);
  }
}
