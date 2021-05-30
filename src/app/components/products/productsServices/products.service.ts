import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import Product from '../products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public dbPath = '/products';

  productsRef: AngularFirestoreCollection<Product>;

  constructor(private db : AngularFirestore) {
    this. productsRef = db.collection(this.dbPath);
   }

   getAll(): AngularFirestoreCollection<Product> {
    return this.productsRef;
   }
   
  }
