import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import Promoter from '../promoters.model';

@Injectable({
  providedIn: 'root'
})
export class PromotersService {

  public dbPath = '/promoters';

  promotersRef: AngularFirestoreCollection<Promoter>;

  constructor(private db : AngularFirestore) {
    this.promotersRef = db.collection(this.dbPath);
   }

   getAll(): AngularFirestoreCollection<Promoter> {
    return this.promotersRef;
  }

  create(promoter: Promoter): any {
    return this.promotersRef.add({ ...promoter });
  }

  update(id: string, data: any): Promise<void> {
    return this.promotersRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.promotersRef.doc(id).delete();
  }


}
