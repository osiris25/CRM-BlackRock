import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import Customer from '../customers.model';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  public dbPath = '/customers';

  customerRef: AngularFirestoreCollection<Customer>;

  constructor(private db : AngularFirestore) {
    this.customerRef = db.collection(this.dbPath);
   }

   getAll(): AngularFirestoreCollection<Customer> {
    return this.customerRef;
  }

  create(customer: Customer): any {
    return this.customerRef.add({ ...customer });
  }

  update(id: string, data: any): Promise<void> {
    return this.customerRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.customerRef.doc(id).delete();
  }
}
