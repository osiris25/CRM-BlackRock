import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/internal/operators';
import Product from './products.model';
import { ProductsService } from './productsServices/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productData?: Product[];
  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.ProductsService.getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.productData = data;
      });
  }
}
