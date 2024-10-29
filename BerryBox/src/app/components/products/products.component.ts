import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-products',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products: any[] = [];

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            (data) => this.products = data,
            (error) => console.error(error)
        );
    }

    addToCart(product: any) {
        console.log('Added to cart:', product);
    }
}
