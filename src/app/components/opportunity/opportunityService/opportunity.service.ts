import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import Opportunity from '../opportunity.model';

@Injectable({
	providedIn: 'root'
})
export class OpportunityService {


	public dbPath = '/opportunity';

	OpportunityRef: AngularFirestoreCollection<Opportunity>;

	constructor(private db: AngularFirestore) {
		this.OpportunityRef = db.collection(this.dbPath);
	}

	getAll(): AngularFirestoreCollection<Opportunity> {
		return this.OpportunityRef;
	}

	create(opportunity: Opportunity): any {
		return this.OpportunityRef.add({ ...opportunity });
	}

	update(id: string, data: any): Promise<void> {
		return this.OpportunityRef.doc(id).update(data);
	}

	delete(id: string): Promise<void> {
		return this.OpportunityRef.doc(id).delete();
	}
}
