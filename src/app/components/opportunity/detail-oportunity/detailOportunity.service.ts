import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { DetailOportunityComponent } from './detail-oportunity.component';

@Injectable({
  providedIn: 'root'
})
export class DetailOpportunityService {

  public dbPath = '/detailOportunity';

	DetailOpportunityRef: AngularFirestoreCollection<DetailOportunityComponent>;

	constructor(private db: AngularFirestore) {
		this.DetailOpportunityRef = db.collection(this.dbPath);
	}

	getAll(): AngularFirestoreCollection<DetailOportunityComponent> {
		return this.DetailOpportunityRef;
	}

	// create(detailopportunity: DetailOportunityComponent): any {
	// 	return this.DetailOpportunityRef.add({ ...detailopportunity });
	// }

	update(id: string, data: any): Promise<void> {
		return this.DetailOpportunityRef.doc(id).update(data);
	}

	delete(id: string): Promise<void> {
		return this.DetailOpportunityRef.doc(id).delete();
	}
}
